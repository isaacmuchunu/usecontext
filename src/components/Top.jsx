import { useContext } from "react";
import { AppContext } from "../App";
import ChangeName from "./ChangeName";

const Top = (props) => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h1>This is the top component: {name}</h1>
      <ChangeName />
    </div>
  );
};
export default Top;
