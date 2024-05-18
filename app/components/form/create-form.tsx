"use client"
import React, { ChangeEvent, FormEvent, KeyboardEvent, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CreateFormErrors, CreateFormValues } from '../../types'
import { RxCross2 } from 'react-icons/rx'
import { z } from "zod"
import Textarea from './textarea'
import Input from './input'
import Tag from '../tag'

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

    if (!result.success) return setFormErrors(errors)

    //Todo: Run supabase save post action
    setFormState(initState)
    event.currentTarget.reset()
    setFormErrors({})
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

    const hasErrors = !validatedTag.success

    if (hasErrors) return setFormErrors({
      ...formErrors,
      tags: [validatedTag.error.errors[0].message]
    })

    setFormState({
      ...formState,
      tags: formState.tags.concat(currentTag)
    })
    setFormErrors({
      ...formErrors,
      tags: undefined
    })
    event.currentTarget.value = ''
  }

  const setFieldValue = (name: keyof CreateFormValues) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [name]: event.target.value
    })
  }

  //w-full mt-4 p-2 border-b-2 border-black

  return (
    <section className='flex gap-6'>
      <div className='flex-1 h-full'>
        <h2 className="text-3xl font-bold my-4">Escribir publicacion</h2>
        <form onSubmit={handleSubmit}>
          <Input onChange={setFieldValue("title")} placeholder='Titulo' className='input' currentLength={formState.title.length} maxLength={80} type="text" id="title" name="title" errorMessage={
            formErrors?.title && formErrors?.title[0]
          } />
          <Textarea maxLength={250} currentLength={
            formState.description.length
          } onChange={setFieldValue("description")} className="min-h-16  input" placeholder="Descripcion" id="description" name="description" errorMessage={formErrors?.description && formErrors?.description[0]} />

          <Textarea
            currentLength={formState.body.length}
            className="min-h-28 input" placeholder="Contenido" onChange={setFieldValue("body")} id="body" name="body" errorMessage={formErrors?.body && formErrors?.body[0]}
          />
          <div className='mt-4'>
            <Input
              onKeyDown={handleTagChange} className="input" placeholder="Etiquetas" type="text" id="tags" name="tags" errorMessage={formErrors?.tags && formErrors?.tags[0]} />
          </div>
          <div className='mt-2 flex flex-wrap gap-2'>
            {
              formState.tags.map((tag, index) => (
                <Tag
                  key={index}
                  tag={tag}
                  index={index}
                  onClear={handleTagClear}
                />
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
