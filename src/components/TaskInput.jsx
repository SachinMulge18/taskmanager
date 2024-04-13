import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import "./TaskInput.css";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    const textValue = e.target.value;
    setText(textValue);
  };
  const handleAddTask = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
      console.log(text);
    } else {
      console.log("enter text");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            onKeyDown={handleKeyPress}
            placeholder="Enter to-do"
          />
          <button onClick={handleAddTask}>ADD</button>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
