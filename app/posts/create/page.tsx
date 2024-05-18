import React from 'react'
import PageLayout from '@/app/components/page-layout'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CreateForm from '@/app/components/form/create-form'


const CreatePostPage = () => {
  return (
    <PageLayout>
      <CreateForm />
    </PageLayout>
  )
}

export default CreatePostPage
