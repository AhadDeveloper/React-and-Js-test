import ContextProvider from "./context/ContextProvider";
import Counter from "./components/counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <ContextProvider>
      <h1 className="text-2xl text-center">React</h1>
      <Counter />
      <Toggle />
    </ContextProvider>
  );
}

export default App;
