export type Post = {
  id: number;
  created_at: string;
  body: string;
  tags: string[] | null;
  user_id: number;
  title: string;
};

export type Theme = "light" | "dark";
