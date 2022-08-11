import { StatusBar } from "react-native";
import { TaskContextProvider } from "./src/hooks/useTask";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <TaskContextProvider>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Home />
      </TaskContextProvider>
    </>
  );
}
