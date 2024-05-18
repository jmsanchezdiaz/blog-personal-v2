import React from 'react'
import moment from 'moment'
import PageLayout from '@/app/components/page-layout'
import { getPost } from '@/app/libs/supabase/actions'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
        <span className="text-gray-500 block mb-2 dark:text-gray-300">
          Topics: {post.tags?.join(", ")}
        </span>
        <h2 className='text-4xl my-4 font-bold'>{post.title}</h2>

        <div className='flex justify-between pb-2 text-gray-500 dark:text-gray-300'>
          <span>
            Published by {post.user.username}
          </span>
          <span>
            {moment(post.created_at).format("MMM Do, YYYY")}
          </span>
        </div>

      </div>
      <Markdown className="markdown pb-8 max-w-full" remarkPlugins={[
        remarkGfm
      ]}>
        {post.body}
      </Markdown>

    </PageLayout >
  )
}

export default PostPage
