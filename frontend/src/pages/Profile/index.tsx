import { UserCard } from "../../components/UserCard"
import { useContext, useState } from "react"
import { EditUserModal } from "../../components/Modals/User/EditModal"
import { DeleteUserModal } from "../../components/Modals/User/DeleteModal"
import { EditUserData } from "../../components/Modals/User/EditModal/validator"
import { AuthContext } from "../../providers/AuthProvider"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"

export const Profile = () => {
  const [hideEdit, setHideEdit] = useState(true)
  const [hideDelete, setHideDelete] = useState(true)

  const { editUser, deleteUser, logout } = useContext(AuthContext)

  const edit = (data: EditUserData) => {
    editUser(data)
    setHideEdit(true)
  }

  return (
    <main>
      <Navbar title="Profile">
        <li><Link to="/contacts">Abrir Contatos</Link></li>
        <li><a onClick={() => logout()}>Sair</a></li>
      </Navbar>
      <UserCard setHideEdit={setHideEdit} setHideDelete={setHideDelete} />
      {
        hideEdit ? <></> : (
          <EditUserModal
            title="Editar Usuario"
            submit={edit}
            hide={hideEdit}
            setHide={setHideEdit}/>
        )
      }
      {
        hideDelete ? <></> : (
          <DeleteUserModal
            submit={deleteUser}
            hide={hideDelete}
            setHide={setHideDelete}/>
        )
      }
    </main>
  )
}