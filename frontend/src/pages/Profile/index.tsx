import { UserCard } from "../../components/UserCard"

export const Profile = () => {
  return (
    <>
      <h1>Perfil</h1>
      <UserCard user={{
        id: 0,
        name: "",
        email: "",
        phone: "000000000",
        admin: false
      }} setHideEdit={() => null} setHideDelete={() => null} />
    </>
  )
}