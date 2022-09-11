import React, { useState } from "react";
import { ListItem } from "./components/ListItem";
import "./components/style.css";

export default function App() {
  const [text, setText] = useState("");
  const [toDoList, updateToDoList] = useState([]);
  const addNote = () => {
    updateToDoList([...toDoList, { id: Math.random(), description: text }]);
    // toDoList.push({ description: text });
    // updateToDoList(toDoList);
    setText("");
  };

  function deleteToDo(id) {
    // filter out the item with the id
    const updatedToDoList = toDoList.filter((item) => item.id !== id);
    updateToDoList(updatedToDoList);
  }

  return (
    <div className="app-background">
      <p className="heading-text">React-to-do-list</p>
      <div className="task-container">
        <div>
          <input
            className="text-input"
            placeholder="type here..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button disabled={!text} className="add-button" onClick={addNote}>
            ADD
          </button>
        </div>
        {toDoList.length > 0 ? (
          <ListItem todos={toDoList} handleDeleteTodo={deleteToDo} />
        ) : (
          <p className="no-item-text">No Task Added yet</p>
        )}
      </div>
    </div>
  );
}
