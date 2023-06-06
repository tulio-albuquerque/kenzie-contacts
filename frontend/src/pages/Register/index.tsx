import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RegisterData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"

import { Register as Container, Card } from "./styles"
import { BrandButton } from "../../styles/buttons"
import { Field, Fields } from "../../styles/forms"

export const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterData>({
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
              {errors.name && <p>{errors.name.message}</p>}
            </Field>
            <Field>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" {...register('email') }/>
              {errors.email && <p>{errors.email.message}</p>}
            </Field>
            <Field>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" { ...register('password') } />
              {errors.password && <p>{errors.password.message}</p>}
            </Field>
            <Field>
              <label htmlFor="confirm">Senha</label>
              <input type="password" id="confirm" { ...register('confirm') }/>
              {errors.confirm && <p>{errors.confirm.message}</p>}
            </Field>
            <Field>
              <label htmlFor="phone">Telefone</label>
              <input type="text" id="phone" { ...register('phone') }/>
              {errors.phone && <p>{errors.phone.message}</p>}
            </Field>
            <Field>
              <label htmlFor="admin">Admin</label>
              <input type="checkbox" id="admin" { ...register('admin') }/>
              {errors.admin && <p>{errors.admin.message}</p>}
            </Field>
          </Fields>
          <BrandButton type="submit">Registrar</BrandButton>
        </form>
      </Card>
    </Container>
  )
}