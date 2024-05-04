import { cookies } from "next/headers";
import { createClient } from "./supabase/server";

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const response = await supabase.from('posts').select()
  const { data: posts, error } = response
  console.log(response)
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <h2>
            {post.title}
          </h2>
          <p>
            {post.body}
          </p>
          <time>{post.created_at}</time>
        </li>
      ))}
    </ul>
  )
}
