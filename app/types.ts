export type Post = {
  id: number;
  created_at: string;
  body: string;
  tags: string[] | null;
  user_id: number;
  description?: string;
  title: string;
};

export type User = {
  id: number;
  username: string;
};

export type Theme = "light" | "dark";

export interface CreateFormValues {
  title: string;
  description: string;
  body: string;
  tags: string[];
}
