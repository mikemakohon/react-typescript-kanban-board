import React from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../AddNewItem.ts";
import { Card } from "../Card";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Build App" />
      <Card text="Learn TypeScript" />
      <Card text="Get a job" />
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("New item added")}
      />
    </ColumnContainer>
  );
};
