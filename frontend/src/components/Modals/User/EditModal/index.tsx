import { useForm } from "react-hook-form"
import { EditUserData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

import { Header, Modal, ModalBody, ModalWrapper, Buttons } from "./styles"
import { Field, Fields } from "../../../../styles/forms"
import { BrandButton, RemoveButton } from "../../../../styles/buttons"
import { useContext, useState } from "react"
import { AuthContext } from "../../../../providers/AuthProvider"

interface Props {
  title: string
  hide: boolean
  submit: (data: EditUserData) => void
  setHide: (value: boolean) => void
}

export const EditUserModal = ({ title, submit, hide, setHide}: Props) => {
  const { user } = useContext(AuthContext)
  const [ profile, setProfile ] = useState(user)

  const {
    register,
    handleSubmit
  } = useForm<EditUserData>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      password: user?.password,
      phone: user?.phone
    },
    resolver: zodResolver(schema)
  })


  return (
    <ModalWrapper hide={hide}>
      <Modal>
        <Header>
           <span>{title}</span>
           <button onClick={() => setHide(true)}>X</button>
        </Header>
         <ModalBody>
           <form onSubmit={handleSubmit(submit)}>
            <Fields>
              <Field>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" defaultValue={profile?.name} {...register('name') }/>
              </Field>
              <Field>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" defaultValue={profile?.email} {...register('email') }/>
              </Field>
              <Field>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" defaultValue={profile?.password} {...register('password') }/>
              </Field>
              <Field>
                <label htmlFor="phone">Telefone</label>
                <input type="text" id="phone" defaultValue={profile?.phone} {...register('phone') }/>
              </Field>
            </Fields>
            <Buttons>
              <BrandButton type="submit">Salvar</BrandButton>
              <RemoveButton
                onClick={() => setHide(true)}>
                  Cancelar
              </RemoveButton>
            </Buttons>
           </form>
         </ModalBody>
      </Modal>
    </ModalWrapper>
  )
}