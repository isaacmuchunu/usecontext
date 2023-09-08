import Middle from "./components/Middle";
import Top from "./components/Top";
import { useState, createContext } from "react";
import "./styles.css";

export const AppContext = createContext();

export default function App() {
  const [name, setName] = useState("zed");

  return (
    <AppContext.Provider value={{ name, setName }}>
      <div className="App text">
        <Top />
        <Middle />
      </div>
    </AppContext.Provider>
  );
}
