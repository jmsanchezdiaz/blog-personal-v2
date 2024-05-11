import PageLayout from '@/app/components/page-layout'
import { getPost } from '@/app/supabase/actions'
import { createClient } from '@/app/supabase/server'
import { Post, User } from '@/app/types'
import moment from 'moment'
import React from 'react'

interface Params {
  params: {
    id: string
  },
}

const PostPage = async ({ params }: Params) => {
  const post = await getPost(
    +params.id
  )

  return (
    <PageLayout className='space-y-8'>
      <div className=" border-b-2 border-black dark:border-gray-300 pb-2">
        <span className="text-gray-500 dark:text-gray-300">
          {post.tags?.join(", ")}
        </span>
        <h2 className='text-4xl mb-2 font-bold'>{post.title}</h2>

        <div className='flex justify-between text-gray-500 dark:text-gray-300'>
          <span>
            Published by {post.user.username}
          </span>
          <span>
            {moment(post.created_at).format("MMM Do, YYYY")}
          </span>
        </div>

      </div>
      <p>
        {post.body}
      </p>

    </PageLayout >
  )
}

export default PostPage
