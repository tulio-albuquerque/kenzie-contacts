import { Header, Modal, ModalBody, ModalWrapper, Buttons } from "./styles"
import { BrandButton, RemoveButton } from "../../../../styles/buttons"

interface Props {
  hide: boolean
  submit: () => void;
  setHide: (value: boolean) => void;
}

export const DeleteUserModal = ({ submit, hide, setHide}: Props) => {
  return (
    <ModalWrapper hide={hide}>
      <Modal>
        <Header>
           <span>Deletar Contato</span>
           <button onClick={() => setHide(true)}>X</button>
        </Header>
         <ModalBody>
           <form onSubmit={submit}>
            <h2>Deseja realmente deletar o usuario?</h2>
            <Buttons>
              <BrandButton type="submit">Deletar</BrandButton>
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