import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/tasksSlice";
import "./TaskLists.css";
import { FaTrash } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

const TaskLists = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const deleteHandle = (id) => {
    dispatch(deleteTask(id));
    console.log(id);
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
    console.log(taskId);
  };

  return (
    <>
      {tasks.length > 0 && (
        <div className="task-container">
          <h2 className="task-heading">Tasks List</h2>
          {tasks.map((task) => (
            <ul key={task.id}>
              <h3 className={`${task.completed ? "task-completed" : ""}`}>
                {task.text}
              </h3>
              <div className="actions">
                <li>
                  <FaTrash
                    size={20}
                    className="trash"
                    onClick={() => deleteHandle(task.id)}
                  />
                </li>
                <li onClick={() => handleToggleTask(task.id)}>
                  {task.completed ? (
                    <FaToggleOn className="task-complete" size={24} />
                  ) : (
                    <FaToggleOff size={24} />
                  )}
                </li>
              </div>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default TaskLists;
