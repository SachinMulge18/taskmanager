import React from "react";
import "./App.css";
import TaskLists from "./components/TaskLists";
import TaskInput from "./components/TaskInput";

const App = () => {
  return (
    <div className="app">
      <h1 className="heading">
        QuadB Tech <span className="sub-text">Task Manager</span>
      </h1>
      <TaskInput />
      <TaskLists />
    </div>
  );
};

export default App;
