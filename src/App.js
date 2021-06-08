import "./App.css";
import React, { useState, useEffect } from "react";
import {
  useChangeStatusMutation,
  useChangeTitleMutation,
  useDeleteTaskMutation,
  useInsertTaskMutation,
  useTasksQuery,
} from "./codegen";

function App() {
  const [taskValue, setTaskValue] = useState("");
  const [changeTitleValue, setChangeTittleValue] = useState("");
  const [idForChangeTitle, setIdForChangeTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const [{ data, fetching, error }, executeQuery] = useTasksQuery();
  const [state, executeMutation] = useInsertTaskMutation();
  const [changeStatus, changeStatusMutation] = useChangeStatusMutation();
  const [deleteTask, deleteTaskMutation] = useDeleteTaskMutation();
  const [changeTitleM, changeTitleMutation] = useChangeTitleMutation();

  const addTask = () => {
    executeMutation({ title: taskValue });
  };
  const onChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };
  const onChangeTitle = (e) => {
    setChangeTittleValue(e.target.value);
  };
  const changeTitle = () => {
    changeTitleMutation({ id: idForChangeTitle, title: changeTitleValue });
  };

  if (fetching) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="App">
      <input onChange={onChangeHandler} />
      <button onClick={addTask}>+</button>
      {editMode && (
        <div>
          <label>Chage text</label>
          <input value={changeTitleValue} onChange={onChangeTitle} />
          <button onClick={changeTitle}>change</button>
        </div>
      )}
      {data.tasks.map((task) => {
        return (
          <div className="tasks">
            <input
              onChange={() => {
                changeStatusMutation({ id: task.id, isDone: !task.isDone });
              }}
              checked={task.isDone}
              type="checkbox"
            ></input>
            <li>{task.title}</li>
            <button
              onClick={() => {
                setIdForChangeTitle(task.id);
                setEditMode(!editMode);
              }}
            >
              {editMode ? "hide" : "edit"}
            </button>
            <button onClick={() => deleteTaskMutation({ id: task.id })}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
