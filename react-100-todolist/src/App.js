import TodoMain from "./component/TodoMain";
import { TodoContextProvider as Store } from "./context/TodoContextProvider";

function App() {
  return (
    <>
      <Store>
        <TodoMain />
      </Store>
    </>
  );
}

export default App;
