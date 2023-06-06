import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const ListItem = styled.li`
  min-height: 4.8rem;
  border: 0.1rem solid black;
  border-radius: 0.8rem;
  padding-inline: 0.8rem;
  font-size: 1.6rem;
`

export const ListItemHeader = styled.div`
  min-height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListItemBody = styled.div`
  border: 0.1rem solid black;
  border-radius: 1rem;
  margin-bottom: 1rem;
`

export const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
`