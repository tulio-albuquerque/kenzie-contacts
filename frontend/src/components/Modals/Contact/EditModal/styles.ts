import styled from "styled-components";

interface ModalWrapperProps {
  hide: boolean
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.hide ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 369px;
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9.63px 16.04px;
  background: #4529E6;
  border-radius: 3.20867px 3.20867px 0px 0px;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 11.2304px;
    line-height: 19px; /* identical to box height, or 171% */
    /* grey-0 */
    color: #FDFDFD;
  }

  button {
    border: none;
    background: transparent;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 12.8347px;
    line-height: 21px;
    color: #868e96;
  }
`;

export const ModalBody = styled.div`
  padding: 14.44px 18.64px 25.67px 17.64px;
  background: #FDFDFD;
  border-radius: 0px 0px 3.20867px 3.20867px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    gap: 22px;

    & button:first-child {
      width: 100%;
      min-width: 204px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;

  label {
    /* Text/body-2-400 */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    /* Grey Scale/grey-2 */
    color: #495057;
  }
`