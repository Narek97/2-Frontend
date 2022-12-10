import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);

  const navigateToCurrentUser = (user: IUser) => {
    navigate(`/user/${user.id}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Users</h1>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem onClick={navigateToCurrentUser} user={user} key={user.id} />
        )}
      />
    </div>
  );
};

export default UsersPage;
