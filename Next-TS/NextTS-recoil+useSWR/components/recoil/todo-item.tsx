import React, { FC } from "react";
import { Todo, todoListState } from "../../pages/recoil";
import { useRecoilState } from "recoil";

interface TodoItemProps {
  todo: Todo;
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todo,
      title: e.target.value,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input value={todo.title} onChange={changeHandler} />
      <button>Change</button>
      <button onClick={deleteItem}>Delete</button>
      <br />
      <br />
    </div>
  );
};

export default TodoItem;

function replaceItemAtIndex(arr: any, index: any, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: any, index: any) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
