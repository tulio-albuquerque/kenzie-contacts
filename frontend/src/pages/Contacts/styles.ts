import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: #EFEFEF;

  h1 {
    font-size: 2.2rem;
  }

  button {
    width: 4.8rem;
  }
`

export const Contacts = styled.main`
`

export const ContactList = styled.ul`
  list-style: none;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`