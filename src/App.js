import "./App.css";
import { useMutation, useQuery } from "urql";
import gql from "graphql-tag";
import React, { useState } from "react";

function App() {
  const [taskValue, setTaskValue] = useState("");
  const GET_USERS = gql`
    query MyQuery {
      users {
        email
        id
        name
        task
      }
    }
  `;

  const INSERT_TASK = gql`
    mutation MyMutation($task: String = "") {
      insert_users(objects: { task: $task, name: "", email: "" }) {
        returning {
          task
        }
      }
    }
  `;
  const [{ data, fetching, error }] = useQuery({ query: GET_USERS });
  const [state, executeMutation] = useMutation(INSERT_TASK);

  if (fetching) return <div>Fetching</div>;
  if (error) return <div>Error</div>;
  console.log(data);

  const addTask = () => {
    executeMutation({ task: taskValue });
  };
  const onChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };

  return (
    <div className="App">
      <input onChange={onChangeHandler} />
      <button onClick={addTask}>+</button>
      {data.users.map((a) => {
        return (
          <div className="tasks">
            <input type="checkbox"></input>
            <li>{a.task}</li>
          </div>
        );
      })}
    </div>
  );
}

export default App;
