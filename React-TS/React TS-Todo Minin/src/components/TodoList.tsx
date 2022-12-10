import React, { FC } from "react";
import { ITodo } from "../types";

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: number | string) => void;
  onRemove: (id: number | string) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos?.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label htmlFor={`${todo.id}`}>
              <input
                type="checkbox"
                id={`${todo.id}`}
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className={"material-icons red-text"}
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
