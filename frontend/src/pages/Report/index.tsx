import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useAuth } from "../../hooks/useAuth"

import { List, ListItem, ListItemBody, ListItemHeader, ListItemInfo } from "./styles"
import { useEffect, useState } from "react"
import { ContactReportData, ReportData } from "../../providers/AuthProvider"

export const Report = () => {
  const { logout, retriveReport} = useAuth()
  const [ users, setUsers ] = useState<ReportData[]>([])

  useEffect(() => {
    const makeReport = async () => {
      const users = await retriveReport()
      setUsers(users)
    }

    makeReport()
  }, [])

  return <main>
    <Navbar title="Report">
      <li><Link to="/contacts">Abrir Contatos</Link></li>
      <li><Link to="/profile">Abrir Perfil</Link></li>
      <li><a onClick={() => logout()}>Sair</a></li>
    </Navbar>
    <List>
      {
        users.map(user => (
          <ListItem key={user.id}>
            <ListItemHeader>
              {user.name}
            </ListItemHeader>
            <ListItemBody>
              <ListItemInfo>
                <span>Phone: {user.phone}</span>
                <span>E-mail: {user.email}</span>
                <span>Admin: {user.admin ? "True" : "False"}</span>
              </ListItemInfo>
              {
                user.contacts.length > 0 ?
                <List>
                {
                  user.contacts.map((contact: ContactReportData) => (
                    <ListItem key={contact.id}>
                      <ListItemHeader>
                        {contact.name}
                      </ListItemHeader>
                      <ListItemBody>
                        <ListItemInfo>
                          <span>E-mail: {contact.email}</span>
                          <span>Phone: {contact.phone}</span>
                        </ListItemInfo>
                      </ListItemBody>
                    </ListItem>
                  ))
                }
                </List> : <></>
              }
            </ListItemBody>
          </ListItem>
        ))
      }
    </List>
  </main>
}