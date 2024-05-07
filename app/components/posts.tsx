import React from 'react'
import { createClient } from '../supabase/server'
import { Post } from "@/app/types"
import PostItem from './post-item'

const Posts = async () => {
  const supabase = createClient()
  const { data: posts } = await supabase.from("posts").select()

  return (
    <section>
      <h2 className='text-3xl mb-2 font-bold border-b-2 border-gray-900 dark:border-gray-700 pb-3'>Posts</h2>
      <ul className='mt-4'>
        {posts?.map((post: Post) => <PostItem key={post.id} post={post} />)}
      </ul>
    </section >
  )
}

export default Posts
