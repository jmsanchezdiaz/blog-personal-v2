import { cookies } from "next/headers";
import { Theme } from "./types";

export const toggleTheme = async () => {
  "use server";
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme")?.value as Theme;

  cookiesStore.set("theme", !theme || theme === "light" ? "dark" : "light");
};
