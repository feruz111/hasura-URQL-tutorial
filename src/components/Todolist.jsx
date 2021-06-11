import gql from "graphql-tag";
import React, { useState } from "react";
import { useQuery } from "urql";
import { Loader } from "./Loader";
import {
  useGetTodolistsQuery,
  useInsertTaskMutationMutation,
} from "../codegen";

export function Todolist({ todolist, refetch }) {
  //state
  const [taskValue, setTaskValue] = useState("");
  //queries
  const [taskData, insertTaskMutation] = useInsertTaskMutationMutation();
  //funcHandlers
  const onChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };
  const addTask = () => {
    insertTaskMutation({
      objects: {
        set_id: todolist.id,
        name: taskValue,
      },
    }).then(() => {
      refetch({
        requestPolicy: "network-only",
      });
    });
  };
  return (
    <div>
      <h2>{todolist.name}</h2>
      <input onChange={onChangeHandler} />
      <button onClick={addTask}>+</button>

      {todolist.tasks.map((a) => {
        return <li>{a.name}</li>;
      })}
      <hr />
    </div>
  );
}
