import styled from "styled-components";

export const Navbar = styled.nav`
  min-height: 8rem;
  padding: 0px 16px;
  /* gap: 690px; */
  background: #FDFDFD;
  border-bottom: 2px solid #DEE2E6;
  position: relative;
`

export const Header = styled.header`
  height: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  // text
  font-family: 'Lexend';
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 3rem;
`

export const NavBody = styled.ul`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  list-style: none;
  margin-bottom: 1.6rem;

  a {
    cursor: pointer;
  }
`

export const NavModal = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  width: 202px;
  background: #F8F9FA;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 2.1rem 2.2rem 0 2.1rem;
`