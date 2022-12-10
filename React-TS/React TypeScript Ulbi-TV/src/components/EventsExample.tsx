import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder={"controlled"}
      />
      <input ref={inputRef} type="text" placeholder={"unControlled"} />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default EventsExample;
