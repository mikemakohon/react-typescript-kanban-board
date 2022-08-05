import { Action } from "./actions";
import { v4 as uuidv4 } from "uuid";
// import { nanoid } from "nanoid";
import { findItemIndexById } from "../utils/arrayUtils";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      const id = uuidv4();
      draft.lists[targetListIndex].tasks.push({ id, text });
      break;
    }
    case "ADD_LIST": {
      const id = uuidv4();
      const text = action.payload;
      // ! error when pushing tasks = [] variable;
      draft.lists.push({ id, text, tasks: [] });
      break;
    }
  }
};
