import PageLayout from '@/app/components/page-layout'
import { createClient } from '@/app/supabase/server'
import { Post } from '@/app/types'
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
  const post: Post | null = data ? data[0] : null

  if (!post) {
    return <h2>Post not found</h2>
  }


  return (
    <PageLayout className='space-y-8'>
      <h2 className='text-4xl font-bold'>{post.title}</h2>
      <p >
        {post.body}
      </p>
      <span>
        {post.tags?.join(", ")}
      </span>
    </PageLayout>
  )
}

export default PostPage
