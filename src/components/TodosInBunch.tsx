import React, { ChangeEvent, useState } from "react";
import { useAddingInBunchMutation } from "../codegen";

export function TodosInBunch({ send, executeQuery }: any) {
  //state
  const [inputValue, setInputValue] = useState<string>();
  const [saveLocally, setSaveLocally] = useState<any>([]);
  //query
  const [_, sendInBunchMutation] = useAddingInBunchMutation();
  //function handlers
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const onSaveLocally = () => {
    setSaveLocally([...saveLocally, { title: inputValue, description: "" }]);
    setInputValue("");
  };
  const onSendToServer = () => {
    send("TOGGLE");
    sendInBunchMutation({
      objects: saveLocally,
    }).then(() => {
      executeQuery({
        requestPolicy: "network-only",
      });
      send("TOGGLE");
    });
  };
  return (
    <div>
      <input value={inputValue} onChange={onChangeHandler} />
      <button onClick={onSaveLocally}>Save</button>
      <button onClick={onSendToServer}>Send to server</button>
      {saveLocally &&
        saveLocally.map((a: any) => {
          return <div>{a.title}</div>;
        })}
    </div>
  );
}
