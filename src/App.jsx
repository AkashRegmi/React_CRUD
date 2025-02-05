import { useState } from "react";
import Button from "./component/Button";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const deleteItem = (ind) => {
    setTodo(todo.filter((_, id) => id !== ind));
  };

  const handleEdit = (index) => {
    setIndexToBeEdited(index); // Store the index of the item to be edited
    setInputValue(todo[index]); // Move the existing value into input
  };

  const handleUpdate = () => {
    if (inputValue.trim() === "" || indexToBeEdited === null) return;

    const updatedTodos = todo.map((item, index) =>
      index === indexToBeEdited ? inputValue : item
    );

    setTodo(updatedTodos);
    setIndexToBeEdited(null); // Exit edit mode
    setInputValue(""); // Clear input field
  };

  return (
    <>
      <h1>CRUD APP</h1>
      
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter task..."
          onChange={handleChange}
        />
        {indexToBeEdited !== null ? (
          <Button
            name="Update"
            style={{ backgroundColor: "green" }}
            onClick={handleUpdate}
          />
        ) : (
          <Button
            name="Add"
            style={{ backgroundColor: "green" }}
            onClick={addToDo}
          />
        )}
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todo.map((todoq, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #ccc",
              padding: "5px",
              width: "300px",
            }}
          >
            <span>{todoq}</span>
            <Button
              name="Edit"
              style={{ backgroundColor: "blue" }}
              onClick={() => handleEdit(index)}
            />
            <Button
              name="Delete"
              style={{ backgroundColor: "red" }}
              onClick={() => deleteItem(index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
