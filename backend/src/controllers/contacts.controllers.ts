import { Request, Response } from "express";
import { ContactRequest, ContactResponse, ContactUpdateRequest, ContactsResponse } from "../interfaces/contacts.interfaces";
import createContactService from "../services/contacts/createContact.services";
import patchContactService from "../services/contacts/patchContact.services";
import listContactsService from "../services/contacts/listContacts.services";
import deleteContactService from "../services/contacts/deleteContact.services";


const createContactController =
  async (req: Request, res: Response): Promise<Response> => {
    const userId: number = res.locals.user.id
    const contactData: ContactRequest = req.body

    const newContact: ContactResponse = await createContactService(userId, contactData)

    return res.status(201).json(newContact)
  }

const listContactsController =
  async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.user.id

    const contactsData: ContactsResponse = await listContactsService(userId)

    return res.status(200).json(contactsData)
  }

const patchContactController =
  async (req: Request, res: Response): Promise<Response> => {
    const contactId = parseInt(req.params.contactId)
    const contactData: ContactUpdateRequest = req.body

    const updatedUserData: ContactResponse = await patchContactService(contactId, contactData)

    return res.status(200).json(updatedUserData)
  }

const deleteContactController =
  async (req: Request, res: Response): Promise<Response> => {
    const contactId = parseInt(req.params.contactId)

    await deleteContactService(contactId)

    return res.status(204).send()
  }

export {
  createContactController,
  listContactsController,
  patchContactController,
  deleteContactController
}