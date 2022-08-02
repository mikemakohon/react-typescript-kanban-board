import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: #3179ba;
`;

export const ColumnContainer = styled.div`
  flex-grow: 0;
  margin-right: 20px;
  padding: 8px;
  width: 300px;
  min-height: 40px;
  background-color: #ebecf0;
  border-radius: 3px;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  color: ${(props) => (props.dark ? "#000000" : "#ffffff")};
  cursor: pointer;
  padding: 10px 12px;
  text-align: left;
  background-color: #87c4ec;
  border: none;
  border-radius: 3px;
  width: 100%;
  max-width: 300px;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #00a9e0;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.button`
  padding: 6px 12px;
  text-align: center;
  color: #ffffff;
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
`;

export const NewItemInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
