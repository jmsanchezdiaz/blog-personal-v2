
import React from 'react'
import moment from 'moment'
import { Post } from '../types'
import Link from 'next/link'

interface Props {
  post: Post
}

const PostItem = async ({ post }: Props) => {
  return (
    <Link className='mb-4 block' href={"/posts/" + post.id}>
      <li className="flex flex-col gap-2" key={post.id}>
        <h6 className="font-semibold text-lg">{post.title}</h6>
        <p className="text-gray-700 line-clamp-2 dark:text-gray-400" >
          {post?.description}
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {post.tags?.join(", ")} - {moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}
        </span>
      </li>
    </Link>
  )
}

export default PostItem
