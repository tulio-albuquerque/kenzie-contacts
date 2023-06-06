import { z } from "zod"

export const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string(),
  //   .min(8, { message: "A senha é obrigatória e precisa de mínimo 8 caracteres"})
  //   .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
  //   .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
  //   .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
  confirm: z.string().min(1, "A confirmação de senha é obrigatória"),
  phone: z.string().nonempty("Telefone é obrigatório"),
  admin: z.boolean().optional()
}).refine(({password, confirm}) => password === confirm, {
  message: "As senhas precisam corresponderem",
  path: ["confirm"],
})

export type SignUpData = z.infer<typeof schema>;