import React, { useState} from "react";
import styled from "./App.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { delTask, addTask, toggleCheck, checkedTask } from "./store/actions";




function App() {
  const todo = useSelector((store) => store.app.todos);
  const [value, setValue] = useState("");

  // const [edited, setEdited] = useState(false);

  const dispatch = useDispatch();

  const newTask = () => {
    dispatch(addTask(value));
    setValue('');
  };
  const deleteTask = (index) => {
    dispatch(delTask(index));
  };
  const toggleChecked = (index) => {
    dispatch(toggleCheck(index));
  };
  const checkedTaskSort = () => {
    dispatch(checkedTask());
  };

  return (
    <div className={styled.App}>
      <div className={styled.mainContainer}>
        <input className ={styled.addInput}type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button className={styled.btn} onClick={newTask}>
          add
        </button>
        <button className={styled.btn} onClick={checkedTaskSort}>sort</button>
      </div>
      <div>
        {todo.map((task, index) => (
            <div key={index} className={styled.taskBox}>
              <input
                type="checkbox"
                className={styled.checkbox}
                checked={task.completed}
                onChange={() => toggleChecked(index)}
              />
              <div className={task.completed ? styled.completedLi : styled.simpleLi}>{task.title} </div>
              <button className={styled.btn} onClick={() => deleteTask(index)}>
                del
              </button>
            </div>
        ))}
      </div>

      {/* <div className="text">{name}</div> */}
    </div>
  );
}

export default App;
