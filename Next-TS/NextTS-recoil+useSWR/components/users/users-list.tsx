import React, { FC } from "react";
import UserItem from "./user-item";
import { useRouter } from "next/router";

interface UsersListProps {
  users: any;
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  const router = useRouter();

  const slidePage = (count: number) => {
    const newPage = router.query.page ? +router.query.page + count : count;
    router.push({
      query: { page: newPage.toString() },
    });
  };

  const userDetailsHandler = (id: string) => {
    router.push(`/users/${id}`);
  };

  return (
    <section>
      {users.map((user: any) => (
        <UserItem
          user={user}
          key={user.id}
          userDetailsHandler={userDetailsHandler}
        />
      ))}
      <button onClick={() => slidePage(-1)}>Prev</button>
      <button onClick={() => slidePage(1)}>Next</button>
    </section>
  );
};

export default UsersList;
