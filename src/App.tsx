import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem.ts";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Product Backlog:" />
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("Item created")}
      />
    </AppContainer>
  );
};
