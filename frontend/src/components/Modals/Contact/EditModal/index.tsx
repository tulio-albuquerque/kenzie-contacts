import { useForm } from "react-hook-form"
import { ContactData, schema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

import { Header, Modal, ModalBody, ModalWrapper, Buttons } from "./styles"
import { Field, Fields } from "../../../../styles/forms"
import { BrandButton, RemoveButton } from "../../../../styles/buttons"

interface Props {
  title: string
  hide: boolean
  submit: (data: ContactData) => void
  setHide: (value: boolean) => void
}

export const EditContactModal = ({ title, submit, hide, setHide}: Props) => {
  const {
    register,
    handleSubmit
  } = useForm<ContactData>({
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
                <input type="text" id="name" {...register('name') }/>
              </Field>
              <Field>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register('email') }/>
              </Field>
              <Field>
                <label htmlFor="phone">E-mail</label>
                <input type="text" id="phone" {...register('phone') }/>
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