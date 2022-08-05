import React from "react";
import { ColumnContainer, ColumnTitle } from "../../styles";
import { AddNewItem } from "../AddNewItem.ts";
import { Card } from "../Card";
import { useAppState } from "../../state/AppStateContext";
import { addTask } from "../../state/actions";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another card"
        onAdd={() => dispatch(addTask(text, id))}
      />
    </ColumnContainer>
  );
};
