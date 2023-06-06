import { z } from "zod"

export const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail deve estar no formato correto"),
  password: z.string().nonempty("Senha é obrigatória"),
  phone: z.string().nonempty("Telefone é obrigatório")
})

export type EditUserData = z.infer<typeof schema>;