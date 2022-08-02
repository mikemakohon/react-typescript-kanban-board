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
