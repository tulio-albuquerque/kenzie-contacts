import styled from "styled-components";

export const ContactCard = styled.li`
  min-height: 4.8rem;
  border: 0.1rem solid black;
  border-radius: 0.8rem;
  padding-inline: 0.8rem;
  font-size: 1.6rem;
`

export const ContactHeader = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContactBody = styled.div`
  border: 0.1rem solid black;
  border-radius: 1rem;
  margin-bottom: 1rem;
`

export const ContactInfo = styled.div`
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 1rem;
`

export const ContactActions = styled.div`
  height: 4.8rem;
  display: flex;
  justify-content: space-between;

  button {
    width: 100%;
    border: none;
    background: #EDEAFD;
    border-radius: 0 0 0 1rem;

    &:last-child {
      border-radius: 0 0 1rem 0;
    }

    &:hover {
      background: #B0A6F0;
    }
  }
`