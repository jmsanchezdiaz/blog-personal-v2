import React from 'react'
import { Post } from "@/app/types"
import PostItem from './post-item'
import { getPosts } from '../libs/supabase/actions'

const Posts = async () => {
  const posts = await getPosts()

  return (
    <section>
      <h2 className='text-3xl mb-2 font-bold border-b-[1px] border-gray-500 dark:border-gray-300 pb-3'>Posts</h2>
      {posts.length > 0 ? <ul className='mt-4'>
        {posts?.map((post: Post) => <PostItem key={post.id} post={post} />)}
      </ul> : <p className='mt-4'>
        {/*  Imagen graciosa meme? */}
        No hay posts publicados actualmente.
      </p>}
    </section >
  )
}

export default Posts
