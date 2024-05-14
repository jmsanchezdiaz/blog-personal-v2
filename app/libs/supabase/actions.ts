import { createClient } from "./server";

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
