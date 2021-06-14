import { useMachine } from "@xstate/react";
import React, { useState } from "react";
import "./App.css";
import {
  useChangeStatusMutation,
  useChangeTitleMutation,
  useDeleteTaskMutation,
  useInsertTaskMutation,
  useTasksQuery,
} from "./codegen";
import { Loader } from "./components/Loader";
import { TodosInBunch } from "./components/TodosInBunch";
import { transitionMachine } from "./machines/transitionMachine";
//test
function App() {
  //machine
  const [current, send] = useMachine(transitionMachine);
  //local state
  const [taskValue, setTaskValue] = useState("");
  const [changeTitleValue, setChangeTittleValue] = useState("");
  const [idForChangeTitle, setIdForChangeTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  //queries
  const [{ data, fetching, error }, executeQuery] = useTasksQuery();
  const [state, executeMutation] = useInsertTaskMutation();
  const [changeStatus, changeStatusMutation] = useChangeStatusMutation();
  const [deleteTask, deleteTaskMutation] = useDeleteTaskMutation();
  const [changeTitleM, changeTitleMutation] = useChangeTitleMutation();
  //functionHandlers
  const addTask = () => {
    send("TOGGLE");

    executeMutation({ title: taskValue }).then(() => {
      executeQuery({
        requestPolicy: "network-only",
      });
      send("TOGGLE");
    });
  };
  const onChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };
  const onChangeTitle = (e) => {
    setChangeTittleValue(e.target.value);
  };
  const changeTitle = () => {
    send("TOGGLE");
    changeTitleMutation({ id: idForChangeTitle, title: changeTitleValue }).then(
      () => {
        executeQuery({
          requestPolicy: "network-only",
        });
        send("TOGGLE");
      }
    );
    setEditMode(false);
    setChangeTittleValue("");
  };

  if (current.matches("modifyingState")) {
    return <Loader />;
  }
  if (fetching)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error</div>;

  return (
    <div className="App">
      <TodosInBunch send={send} executeQuery={executeQuery} />
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
                send("TOGGLE");
                changeStatusMutation({
                  id: task.id,
                  isDone: !task.isDone,
                }).then(() => {
                  send("TOGGLE");
                });
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
            <button
              onClick={() => {
                send("TOGGLE");
                deleteTaskMutation({ id: task.id }).then(() => {
                  executeQuery({
                    requestPolicy: "network-only",
                  });
                  send("TOGGLE");
                });
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
