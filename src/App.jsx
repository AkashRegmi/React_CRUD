import { useState } from "react";
import Button from "./component/Button";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handelChange = (e) => {
    setInputValue(e.target.value);
  };
  const addToDo = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (inputValue.trim() === "") return;
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h1>CRUD APP</h1>
      <div
        
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Learn Cooking"
          onChange={handelChange}
        />
        <Button
          name="Add"
          style={{ backgroundColor: "green" }}
          onClick={addToDo}
        />
      </div>
      <ul>
        {todo.map((todoq, index) => {
          return <li key={index}>{todoq}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
