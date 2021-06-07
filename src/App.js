import "./App.css";
import { useMutation, useQuery } from "urql";
import gql from "graphql-tag";
import React, { useState, useEffect } from "react";

const GET_USERS = gql`
  query Tasks {
    tasks {
      id
      isDone
      title
      description
    }
  }
`;

const INSERT_TASK = gql`
  mutation InsertTask($description: String = "", $title: String = "") {
    insert_tasks_one(
      object: { description: $description, isDone: false, title: $title }
    ) {
      description
      id
      isDone
      title
    }
  }
`;

const CHANGE_STATUS = gql`
  mutation ChangeStatus($id: uuid = "", $isDone: Boolean = false) {
    update_tasks_by_pk(pk_columns: { id: $id }, _set: { isDone: $isDone }) {
      description
      id
      isDone
      title
    }
  }
`;
const DELETE_TASK = gql`
  mutation DeleteTask($id: uuid = "") {
    delete_tasks_by_pk(id: $id) {
      id
    }
  }
`;

function App() {
  const [taskValue, setTaskValue] = useState("");

  const [{ data, fetching, error }, executeQuery] = useQuery({
    query: GET_USERS,
  });
  const [state, executeMutation] = useMutation(INSERT_TASK);
  const [changeStatus, changeStatusMutation] = useMutation(CHANGE_STATUS);
  const [deleteTask, deleteTaskMutation] = useMutation(DELETE_TASK);

  const addTask = () => {
    executeMutation({ title: taskValue });
  };
  const onChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };

  if (fetching) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="App">
      <input onChange={onChangeHandler} />
      <button onClick={addTask}>+</button>
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
