
import React from 'react'
import { Post } from '../types'
import moment from 'moment'


interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {

  return (
    <li className="flex flex-col gap-2" key={post.id}>
      <h6 className="font-semibold text-lg">{post.title}</h6>
      <p className="text-gray-700 line-clamp-2 dark:text-gray-400">{post.body.slice(0, 250)}...</p>
      <span className="text-sm text-gray-500 dark:text-gray-300">
        {post.tags?.join(", ")} - {moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}
      </span>
    </li>
  )
}

export default PostItem
