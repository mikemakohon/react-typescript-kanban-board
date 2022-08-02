import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";
import { Column } from "./components/Column";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Product Backlog:" />
    </AppContainer>
  );
};
