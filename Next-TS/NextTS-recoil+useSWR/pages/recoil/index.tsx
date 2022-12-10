import React from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import TodoItem from "../../components/recoil/todo-item";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const todoListState = atom({
  key: "TodoList",
  default: [] as Todo[],
});

const Recoil = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addHandler = () => {
    const newTodo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    };

    setTodoList((oldTodoList: Todo[]) => [...oldTodoList, newTodo]);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
      <span>Character Count:{count}</span>
      <br />
      <br />
      <br />
      <br />
      <div>
        {todoList?.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo}  index={index}/>
        ))}
      </div>
    </div>
  );
};

export default Recoil;
