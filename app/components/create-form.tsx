"use client"
import React, { ChangeEvent, FormEvent, FormEventHandler, KeyboardEvent, KeyboardEventHandler, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CreateFormErrors, CreateFormValues } from '../types'
import { RxCross2 } from 'react-icons/rx'
import { z } from "zod"
import FormError from './form-error'

const schema = z.object({
  title: z.string().min(5,
    {
      message: "El titulo debe tener al menos 5 caracteres"
    }
  ).max(80,
    {
      message: "El titulo debe tener menos de 80 caracteres"
    }
  ).trim(),
  description: z.string().min(5, {
    message: "La descripcion debe tener al menos 5 caracteres"

  }).max(250, {
    message: "La descripcion debe tener menos de 250 caracteres"

  }).trim(),
  body: z.string().min(100, {
    message: "El cuerpo del post debe tener al menos 100 caracteres"

  }).trim(),
  tags: z.array(z.string().min(1, { message: "Las etiquetas deben tener al menos 1 caracter" }))
})


const CreateForm = () => {
  // TODO: Abstraer logica a un hook llamado useForm, 
  const initState = {
    title: '',
    description: '',
    body: '',
    tags: []
  }
  const [formState, setFormState] = useState<CreateFormValues>(initState)
  const [formErrors, setFormErrors] = useState<CreateFormErrors>(
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = schema.safeParse(formState)
    const errors = result.error?.formErrors.fieldErrors

    if (result.success) {
      //Todo: Run supabase save post action
      setFormState(initState)
      event.currentTarget.reset()
      setFormErrors({})
    }
    else {
      setFormErrors(errors)
    }
  }

  const handleTagClear = (index: number) => {
    // TODO: usar un set maybe?
    setFormState(
      {
        ...formState,
        tags: formState.tags.filter((_, i) => i !== index)
      }
    )
  }

  const handleTagChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== "Enter") return;
    event.preventDefault()
    const currentTag = event.currentTarget.value
    const validatedTag = schema.shape.tags.safeParse([currentTag])

    const hasSucceded = validatedTag.success

    if (hasSucceded) {
      setFormState({
        ...formState,
        tags: formState.tags.concat(currentTag)
      })
      event.currentTarget.value = ""
      setFormErrors({
        ...formErrors,
        tags: undefined
      })
      return;
    }
    setFormErrors({
      ...formErrors,
      tags: [validatedTag.error.errors[0].message]
    })
  }

  const setFieldValue = (name: keyof CreateFormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [name]: event.target.value
    })
  }

  return (
    <section className='flex gap-6'>
      <div className='flex-1 h-full'>
        <h2 className="text-3xl font-bold my-4">Escribir publicacion</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={setFieldValue("title")} placeholder='Titulo' className='w-full mt-4 p-2 border-b-2 border-black' type="text" id="title" name="title" />
          <FormError>
            {formErrors?.title && formErrors?.title[0]}
          </FormError>
          <textarea onChange={setFieldValue("description")} className="min-h-16 w-full mt-4 p-2 border-b-2 border-black" placeholder="Descripcion" id="description" name="description" />
          <FormError>
            {formErrors?.description && formErrors?.description[0]}
          </FormError>
          <textarea className="min-h-28 w-full mt-4 p-2 border-b-2 border-black" placeholder="Contenido" onChange={setFieldValue("body")} id="body" name="body" />
          <FormError>
            {formErrors?.body && formErrors?.body[0]}
          </FormError>
          <div id="tags" className='mt-4'>
            <input
              onKeyDown={handleTagChange} className="block w-full border-b-2 border-black p-2" placeholder="Etiquetas" type="text" id="tags" name="tags" />
          </div>
          <FormError>
            {formErrors?.tags && formErrors?.tags[0]}
          </FormError>
          <div className='mt-2'>
            {
              formState.tags.map((tag, index) => (
                <div key={index} className='inline-flex items-center gap-1 bg-green-300 text-white border-2  rounded-lg py-[0.20rem] px-2'>
                  <span>{tag}</span>
                  <button key={index} aria-label="Remove tag" className='font-bold' onClick={() => handleTagClear(index)}>
                    <RxCross2 />
                  </button>
                </div>
              ))
            }
          </div>
          <button className="w-full my-16 inline-block  bg-green-500 p-2 rounded-md hover:bg-gray-300 font-bold text-white" type="submit">Publicar</button>
        </form>
      </div>
      <div className='flex-1 max-h-[600px] max-w-[600px] overflow-x-hidden overflow-y-scroll'>
        <h2 className='text-3xl font-bold my-4'>Previsualizacion del contenido</h2>
        <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
          {formState.body}
        </Markdown>
      </div>
    </section>
  )
}

export default CreateForm
