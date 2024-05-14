import React from 'react'
import { createClient } from '../libs/supabase/server'
import { Post } from "@/app/types"
import PostItem from './post-item'
import { getPosts } from '../libs/supabase/actions'

const Posts = async () => {
  const posts = await getPosts()

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
