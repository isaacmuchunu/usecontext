import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeName = () => {
  const { setName } = useContext(AppContext);

  const [newName, setNewName] = useState("");
  return (
    <div>
      <input
        onChange={(event) => setNewName(event.target.value)}
        type="text"
        name={newName}
        placeholder="Enter a username"
      />
      <button onClick={() => setName(newName)}>Submit</button>
    </div>
  );
};
export default ChangeName;
