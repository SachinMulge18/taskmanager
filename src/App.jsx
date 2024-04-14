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
      {/* Input Task Form */}
      <TaskInput />
      {/* Tasks Lists */}
      <TaskLists />
    </div>
  );
};

export default App;
