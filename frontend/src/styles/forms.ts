import styled from "styled-components";

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #212529;
  }

  input {
    border: 1.5px solid #E9ECEF;
    border-radius: 4px;
    height: 4.8rem;

    padding-left: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
    color: #868E96;
  }
`