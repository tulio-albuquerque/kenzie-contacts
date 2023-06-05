import styled from "styled-components";

export const Login = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1f3f5;
  width: 100%;
  height: 100vh;
`

export const Card = styled.div`
  background: #FDFDFD;
  border-radius: 4px;
  padding: 44px 48px;
  width: 412px;

  display: flex;
  flex-direction: column;
  gap: 32px;
  
  h2 {
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 21px;
  }
`