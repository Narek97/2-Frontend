import React, { FC, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import { ITodo } from "./types";
import TodoList from "./components/TodoList";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    // setTodos([newTodo,...todos ]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number | string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number | string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className={"container"}>
        <TodoForm onAdd={addHandler} />

        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};

export default App;
