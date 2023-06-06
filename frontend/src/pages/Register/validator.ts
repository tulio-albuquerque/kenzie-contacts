import { z } from "zod"

export const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
  phone: z.string().nonempty("Telefone é obrigatório"),
  admin: z.boolean()
}).refine(({password, confirm}) => password === confirm, {
  message: "As senhas precisam corresponderem",
  path: ["confirm"],
})

export type RegisterData = z.infer<typeof schema>;