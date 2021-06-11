import gql from "graphql-tag";
import React, { useState } from "react";
import { useQuery } from "urql";
import { Loader } from "./Loader";
import { Todolist } from "./Todolist";
import { useGetTodolistsQuery, useInsertTodolistMutation } from "../codegen";

export function Todolists() {
  //state
  const [todolistValue, setTodolistValue] = useState("");
  //queries
  const [{ data: todolistsData, fetching, error }, refetch] =
    useGetTodolistsQuery();
  const [insertTodolistData, insertTodolistMutation] =
    useInsertTodolistMutation();
  //funcHandlers
  const onChangeHandler = (e) => {
    setTodolistValue(e.target.value);
  };
  const addTask = () => {
    insertTodolistMutation({
      objects: {
        name: todolistValue,
      },
    }).then(() => {
      refetch({
        requestPolicy: "network-only",
      });
    });
  };
  if (fetching)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error</div>;
  const todolists = todolistsData.todolists;
  return (
    <div>
      <input onChange={onChangeHandler} />
      <button onClick={addTask}>+</button>
      {todolists.map((todolist) => {
        return (
          <div>
            <Todolist refetch={refetch} todolist={todolist} />
          </div>
        );
      })}
    </div>
  );
}
