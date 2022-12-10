import { useSWRHook } from "../../hooks/useSWR";
import TodoItem from "../../components/todos/todo-item";
import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticProps } from "next";
import { customAxios } from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { useSWRConfig } from "swr";
import { fetcher } from "../../utils/fetcher";

const Todos = (todosData: any) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(todosData.todos);

  const [page, setPage] = useState("1");

  const { mutate } = useSWRConfig();
  const { data, error } = useSWRHook(
    `http://localhost:8000/api/v1/todos?_page=${page}&_limit=10`,
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  const onChange = (event: any) => {
    setTitle(event.target.value);
  };

  const slidePage = (count: number) => {
    // const newPage = router.query.page ? +router.query.page + count : count;
    const newPage = +page + count;
    setPage(newPage.toString());
  };

  const addNewTodo = async () => {
    const newTodo: { id: string; title: string; completed: boolean } = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };

    // whit axios
    await customAxios(`http://localhost:8000/api/v1/todos`, "POST", newTodo);

    // whit useSWR
    // await fetcher("http://localhost:8000/api/v1/todos", {
    //   method: "POST",
    //   body: JSON.stringify(newTodo),
    // });

    // auto update
    mutate(`http://localhost:8000/api/v1/todos?_page=${page}&_limit=10`);

    setTitle("");
  };

  const updateTodo = async () => {
    await customAxios("http://localhost:8000/api/v1/todos/1", "PATCH", {
      title: Date.now().toString(),
      completed: true,
    });
    mutate(`http://localhost:8000/api/v1/todos?_page=${page}&_limit=10`);
  };

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!todos) return <div>loading...</div>;

  return (
    <div>
      <input type="text" value={title} onChange={onChange} />

      <button onClick={addNewTodo}>Add Todo</button>
      <button onClick={updateTodo}>Update Todo</button>

      {todos?.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <button onClick={() => slidePage(-1)}>Prev</button>
      <button onClick={() => slidePage(1)}>Next</button>
    </div>
  );
};

export default Todos;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page } = query;
  const pageCount = page || "1";

  const todos = await customAxios(
    `http://localhost:8000/api/v1/todos?_page=${pageCount}&_limit=10`,
    "GET"
  );

  return {
    props: {
      todos,
    },
  };
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const user = await customAxios(
//     `http://localhost:8000/api/v1/todos?_page=1&_limit=10`,
//     "GET"
//   );
//
//   //show 404 if not fond user
//   if (user?.response?.status === 404) {
//     return {
//       notFound: true,
//     };
//   }
//
//   return {
//     props: {
//       user,
//     },
//     revalidate: 25,
//   };
// };
