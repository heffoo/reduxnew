import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const name = useSelector((store) => store.app.name);
  const color = useSelector((store) => store.app.color);

  const dispatch = useDispatch();

  const first = () => {
    dispatch({
      type: "FIRST",
    })
  }
  const second = () => {
    dispatch({
      type: "SECOND",
    })
  }
  // const rename = () => {
  //   dispatch({
  //     type: "RENAME",
  //   });
  // };

  // const recolor = () => {
  //   dispatch({
  //     type: "RECOLOR",
  //   });
  // };
  return (
    <div className="App">
      <div className="header">

      <button className="btn" onClick="">{name}</button> 
          <button className="btn" style={{ color: `${color}` }} >
            321
          </button>
      </div>
      <div className="text">{name}</div>
    </div>
  );
}

export default App;
