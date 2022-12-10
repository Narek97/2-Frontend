import React, { FC } from "react";
import classes from "./todo-item.module.scss";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
  };
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {



  return (
    <div className={classes.todo_item}>
      <p>{todo.id}</p>
      <h2>{todo.title}</h2>
    </div>
  );
};

export default TodoItem;
