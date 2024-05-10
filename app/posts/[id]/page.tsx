import PageLayout from '@/app/components/page-layout'
import { createClient } from '@/app/supabase/server'
import React from 'react'

interface Params {
  params: {
    id: string
  },
  searchParams: {}
}

const PostPage = async ({ params, searchParams }: Params) => {
  const supabase = createClient()
  const { data } = await supabase.from("posts").select().eq("id", params.id)
  const [post] = data
  return (
    <PageLayout>
      <h2>Posts: {params.id}</h2>
    </PageLayout>
  )
}

export default PostPage
