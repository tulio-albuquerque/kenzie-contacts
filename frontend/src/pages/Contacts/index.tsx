import { useContext, useState } from "react"
import { ContactList, Contacts as Container, Navbar } from "./styles"

import { MdOutlineAdd } from "react-icons/md"
import { EditContactModal } from "../../components/Modals/Contact/EditModal"
import { DeleteContactModal } from "../../components/Modals/Contact/DeleteModal"
import { BrandButton } from "../../styles/buttons"
import { ContactData } from "../../components/Modals/Contact/EditModal/validator"
import { Contact, ContactContext } from "../../providers/ContactProvider"
import { ContactCard } from "../../components/ContactCard"
import { useNavigate } from "react-router-dom"

export const Contacts = () => {
  const navigate = useNavigate()
  const { contacts, addContact, editContact, removeContact } = useContext(ContactContext)
  const [contactInfo, setContactInfo]= useState<Contact>({
    id: 0,
    name: "",
    email: "",
    phone: ""
  })
  const [hideAdd, setHideAdd] = useState(true)
  const [hideEdit, setHideEdit] = useState(true)
  const [hideDelete, setHideDelete] = useState(true)


  const edit = (data: ContactData) => {
    editContact(contactInfo.id, data)
    navigate("/contacts")
  }

  const remove = async () => {
    removeContact(contactInfo.id)
  }

  const add = (data: ContactData) => {
    addContact(data)
    setHideAdd(true)
  }

  return (
    <Container>
      <Navbar>
        <h1>Contacts</h1>
        <BrandButton onClick={() => setHideAdd(false)}>
          <MdOutlineAdd />
        </BrandButton>
      </Navbar>
      <ContactList>
        {
          contacts.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              show={contactInfo == contact}
              setContact={setContactInfo}
              setHideEdit={setHideEdit}
              setHideDelete={setHideDelete}/>
          ))
        }
      </ContactList>
      {
        hideAdd ? <></> : (
          <EditContactModal
            title="Adicionar Contato"
            submit={add}
            hide={hideAdd}
            setHide={setHideAdd}/>
        )
      }
      {
        hideEdit ? <></> : (
          <EditContactModal
            title="Editar Contato"
            submit={edit}
            hide={hideEdit}
            setHide={setHideEdit}/>
        )
      }
      {
        hideDelete ? <></> : (
          <DeleteContactModal
            submit={remove}
            hide={hideDelete}
            setHide={setHideDelete}/>
        )
      }
    </Container>
  )
}