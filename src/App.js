import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { delTask, addTask, toggleCheck, checkedTask } from "./store/actions";
import { findAllByDisplayValue } from "@testing-library/react";

function App() {
  const todo = useSelector((store) => store.app.todos);

  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const first = () => {
    dispatch(addTask(task));
  };
  const second = (index) => {
    dispatch(delTask(index));
  };
  const toggleChecked = (index) => {
    dispatch(toggleCheck(index));
  }
  const checkedTaskSort = (item) => {
    dispatch(checkedTask(item));
  }
 
  return (
    <div className="App">
      <div className="header">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button className="btn" onClick={first}>
          123
        </button>
        <button onClick={checkedTaskSort} >1111</button>
      </div>
      <div>
        {todo.map((task, index) => (
          <>
          <input type="checkbox" className="checkbox" checked={task.completed} onClick={() => toggleChecked(index)}/>
          <div key={index}>
            {task.title} 
            <button className="btn" onClick={() => second(index)}>
              321
            </button>
          </div>
       </> ))}
      </div>

      {/* <div className="text">{name}</div> */}
    </div>
  );
}

export default App;
