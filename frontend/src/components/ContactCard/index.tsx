import { Contact } from "../../providers/ContactProvider"
import { ContactActions, ContactBody, ContactHeader, ContactInfo, ContactCard as Container } from "./styles"

import { MdDelete, MdExpandLess, MdExpandMore, MdModeEditOutline } from "react-icons/md"

interface Props {
  contact: Contact
  show: boolean
  setContact: (value: Contact) => void
  setHideEdit: (value: boolean) => void
  setHideDelete: (value: boolean) => void
}

export const ContactCard = ({contact, show, setContact, setHideEdit, setHideDelete}: Props) => {

  const showContact = () => {
    setContact(contact)
  }

  return (
    <Container>
      <ContactHeader onClick={() => showContact()}>
        {contact.name}
        {
          show ? (
            <MdExpandLess />
          ) : (
            <MdExpandMore />
          )
        }
      </ContactHeader>
      {
        show ? (
          <>
            <ContactBody>
              <ContactInfo>
                <span>Phone: {contact.phone}</span>
                <span>E-mail: {contact.email}</span>
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
          </>
        ) : <></>
      }
    </Container>)
}