"use client"
import React, { ChangeEvent, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CreateFormValues } from '../types'
// TODO: ZOD VALIDATION
const CreateForm = () => {
  const [formState, setFormState] = useState<CreateFormValues>({
    title: '',
    description: '',
    body: '',
    tags: []
  })

  const setFieldValue = (name: keyof CreateFormValues) => (event: ChangeEvent<any>) => {
    setFormState({
      ...formState,
      [name]: event.target.value
    })
  }

  return (
    <section className='flex gap-6'>
      <div className='flex-1 h-full'>
        <h2 className="text-3xl font-bold my-4">Create Post</h2>
        <form className="">
          <input onChange={setFieldValue("title")} placeholder='Titulo' className='w-full mt-4 p-2 border-b-2 border-black' type="text" id="title" name="title" />
          <textarea className="w-full mt-4 p-2 border-b-2 border-black" placeholder="Descripcion" id="description" name="description" />
          <textarea className="w-full mt-4 p-2 border-b-2 border-black" placeholder="Contenido" onChange={setFieldValue("body")} id="body" name="body" />
          <div id="tags" className='mt-4'>
            <label htmlFor="tags">Tags</label>
            <input className="block border-b-2 border-black p-2" placeholder="etiquetas" type="text" id="tags" name="tags" />
            <div>
              {/* Mostrar tags agregadas con x para eliminarlas. */}

            </div>
          </div>
          <button className="w-full mt-16 inline-block  bg-green-500 p-2 rounded-md hover:bg-gray-300 font-bold text-white" type="submit">Publish</button>
        </form>
      </div>
      <div className='flex-1'>
        <h2 className='text-3xl font-bold my-4'>Previsualizacion</h2>
        <Markdown className={"prose"} remarkPlugins={[remarkGfm]}>
          {formState.body}
        </Markdown>
      </div>
    </section>
  )
}

export default CreateForm
