import { ContactActions, ContactBody, ContactHeader, ContactInfo, UserCard as Container } from "./styles"

import { MdDelete, MdModeEditOutline } from "react-icons/md"

interface User {
  id: number,
  name: string,
  email: string,
  phone: string,
  admin: boolean
}

interface Props {
  user: User
  setHideEdit: (value: boolean) => void
  setHideDelete: (value: boolean) => void
}

export const UserCard = ({user, setHideEdit, setHideDelete}: Props) => {

  return (
    <Container>
      <ContactHeader>
        {user.name}
      </ContactHeader>
      <ContactBody>
        <ContactInfo>
          <span>Phone: {user.phone}</span>
          <span>E-mail: {user.email}</span>
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
    </Container>)
}