import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUpData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"

import { Register as Container, Card } from "./styles"
import { BrandButton } from "../../styles/buttons"
import { Field, Fields } from "../../styles/forms"

export const Register = () => {
  const { register, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(schema)
  })

  const { signUp } = useAuth()

  return (
    <Container>
      <Card>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(signUp)}>
          <Fields>
            <Field>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" {...register('name') }/>
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" {...register('email') }/>
            </Field>
            <Field>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" { ...register('password') } />
            </Field>
            <Field>
              <label htmlFor="confirm">Senha</label>
              <input type="password" id="confirm" { ...register('confirm') }/>
            </Field>
            <Field>
              <label htmlFor="admin">Admin</label>
              <input type="checkbox" id="admin" { ...register('admin') }/>
            </Field>
          </Fields>
          <BrandButton type="submit">Entrar</BrandButton>
        </form>
      </Card>
    </Container>
  )
}