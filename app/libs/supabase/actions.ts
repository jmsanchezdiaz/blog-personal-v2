"use server";import { Post } from "@/app/types";
import { createClient } from "./server";
import { redirect } from "next/navigation";

export const getPosts = async () => {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select();
  return posts || [];
};

export const getPost = async (postId: number) => {
  const supabase = createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("*, user:user_id(id, username)")
    .eq("id", postId)
    .single();

  return post;
};

export const savePost = async (formData: Partial<Post>) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .insert([
      {
        ...formData,
        user_id: 1
      }
    ])
    .select("id")
    .single();

  if (error) {
    console.error(error);
    return;
  }

  const URL = "/posts/" + data.id;
  redirect(URL);
};
