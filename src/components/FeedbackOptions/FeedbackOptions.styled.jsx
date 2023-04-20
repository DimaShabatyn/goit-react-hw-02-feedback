import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin: 12px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  transition: all 0.2s ease-in-out;
  background-color: orangered;
  color: white;
  cursor: pointer;
  :hover,
  :focus {
    background-color: red;
    color: white;
  }
`;
