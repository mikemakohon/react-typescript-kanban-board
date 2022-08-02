import React from "react";
import { ColumnContainer, ColumnTitle, CardContainer } from "../../styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <CardContainer>Build App</CardContainer>
      <CardContainer>Learn TypeScript</CardContainer>
      <CardContainer>Get a job</CardContainer>
    </ColumnContainer>
  );
};
