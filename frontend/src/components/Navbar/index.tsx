import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdClose, MdMenu } from "react-icons/md";

import { Navbar as Container, Header, NavBody, NavModal } from "./styles";
import { IconButton, ProfileButton } from "../../styles/buttons";

interface Props {
  title: string;
  children: ReactNode
}

const Navbar = ({title, children}: Props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);
  const [isOpen, setIsOpen] = useState(false)

  const { user } = useContext(AuthContext)

  const detectMobile = () => {
    setIsMobile(window.innerWidth < 968);
  };

  useEffect(() => {
    window.addEventListener("resize", detectMobile);

    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);
  
  return <Container>
    <Header>
      <h1>{title}</h1>
      {
        isMobile ? 
          <IconButton onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ?
              <MdClose size={21}/> :
              <MdMenu size={21}/>
          }
          </IconButton> :
          <ProfileButton onClick={() => setIsOpen(!isOpen)}>{user?.name}</ProfileButton>
      }
    </Header>
    <>
      {
        isOpen ? (
          <>
            {
              isMobile ? (
                <NavBody>
                  {children}
                </NavBody>
              ) : (
                <NavModal>
                  <NavBody>
                    {children}
                  </NavBody>
                </NavModal>
              )
            }
          </>
        ) : <></>
      }
    </>
  </Container>
}

export default Navbar