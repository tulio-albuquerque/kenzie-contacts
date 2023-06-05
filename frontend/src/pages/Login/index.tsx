import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"

import { Login as Container, Card} from "./styles"
import { BrandButton, Buttons, SignUpButton } from "../../styles/buttons"
import { Field, Fields } from "../../styles/forms"

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema)
  })

  const { signIn } = useAuth()

  return ( 
    <Container>
      <Card>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(signIn)}>
          <Fields>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" {...register('email') }/>
            </Field>
            <Field>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digitar senha"
                { ...register('password') } />
            </Field>
          </Fields>
          <Buttons>
            <BrandButton type="submit">Entrar</BrandButton>
            <label>Ainda não possue conta?</label>
            <SignUpButton href="/register">Cadastrar</SignUpButton>
          </Buttons>
        </form>
      </Card>
    </Container>
  )
}