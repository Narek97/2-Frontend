import React, { FC, useRef, useState } from "react";

interface todoFormProps {
  onAdd: (title: string) => void;
}

const TodoForm: FC<todoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current!.value.length) {
      // setTitle("");
      onAdd(inputRef.current!.value);
      inputRef.current!.value = "";
    }
  };

  return (
    <div className={"input-filed mt2"}>
      <input
        // value={title || ""}
        // onChange={changeHandler}
        ref={inputRef}
        type="text"
        id={"title"}
        placeholder={"Write todo name"}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className={"active"}>
        Write todo name
      </label>
    </div>
  );
};

export default TodoForm;
