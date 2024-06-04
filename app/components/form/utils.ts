import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "El titulo debe tener al menos 5 caracteres"
    })
    .max(80, {
      message: "El titulo debe tener menos de 80 caracteres"
    })
    .trim(),
  description: z
    .string()
    .min(5, {
      message: "La descripcion debe tener al menos 5 caracteres"
    })
    .max(250, {
      message: "La descripcion debe tener menos de 250 caracteres"
    })
    .trim(),
  body: z
    .string()
    .min(100, {
      message: "El cuerpo del post debe tener al menos 100 caracteres"
    })
    .trim(),
  tags: z.array(
    z
      .string()
      .min(1, { message: "Las etiquetas deben tener al menos 1 caracter" })
  )
});
