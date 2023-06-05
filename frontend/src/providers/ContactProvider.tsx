import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ContactData } from "../components/Modals/Contact/EditModal/validator";
import { Outlet } from "react-router-dom";

export interface Contact {
  id: number
  name: string
  email: string
  phone: string
}

interface ContactProviderProvider {
  contacts: Contact[]
  addContact: (data: ContactData) => void
  editContact: (id: number, data: ContactData) => void
  removeContact: (oldContact: number) => void 
}

export const ContactContext = createContext<ContactProviderProvider>(
  {} as ContactProviderProvider
);

export const ContactProvider = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>('contacts')

      setContacts(response.data);
    })()
  }, [])

  const addContact = async (data: ContactData) => {
    try {
      const response = await api.post<Contact>("contacts", data);
      if (response.status === 201) {
        setContacts([...contacts, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editContact = async (id: number, data: ContactData) => {
    try {
      const response = await api.patch<Contact>(`contacts/${id}`, data);
      if (response.status === 201) {
        const findContact = contacts.filter((contact) => contact.id !== id);
        setContacts([...findContact, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeContact = async (oldContact: number) => {
    try {
      const response = await api.delete(`contacts/${oldContact}`);
      if (response.status === 204) {
        const newTechs = contacts.filter((contact) => contact.id !== oldContact);
        setContacts(newTechs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, editContact, removeContact }}>
      <Outlet />
    </ContactContext.Provider>
  );
};
