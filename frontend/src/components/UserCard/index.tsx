import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { ContactActions, ContactBody, ContactHeader, ContactInfo, UserCard as Container } from "./styles"

import { MdDelete, MdModeEditOutline } from "react-icons/md"


interface Props {
  setHideEdit: (value: boolean) => void
  setHideDelete: (value: boolean) => void
}

export const UserCard = ({setHideEdit, setHideDelete}: Props) => {

  const { user } = useContext(AuthContext)

  return (
    <Container>
      <ContactHeader>
        {user?.name}
      </ContactHeader>
      <ContactBody>
        <ContactInfo>
          <span>Phone: {user?.phone}</span>
          <span>E-mail: {user?.email}</span>
        </ContactInfo>
        <ContactActions>
          <button onClick={() => setHideEdit(false)}>
            <MdModeEditOutline />
          </button>
          <button onClick={() => setHideDelete(false)}>
            <MdDelete />
          </button>
        </ContactActions>
      </ContactBody>
    </Container>
  )
}