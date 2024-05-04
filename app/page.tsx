import Image from "next/image";
import { cookies } from "next/headers";
import { createClient } from "./supabase/server";

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo}</li>
      ))}
    </ul>
  )
}
