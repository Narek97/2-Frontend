import React, { FC } from "react";
import { customAxios } from "../../utils/axios";
import { GetServerSideProps } from "next";
import UsersList from "../../components/users/users-list";
import { usePageLoading } from "../../hooks/usePageLoading";

interface UsersPageProps {
  users: any;
}

const UsersPage: FC<UsersPageProps> = ({ users }) => {
  // const { isPageLoading } = usePageLoading();
  //
  // if (isPageLoading) {
  //   return <h2>Loading...</h2>;
  // }

  if (!users.length) {
    return <h2>No Data</h2>;
  }

  return (
    <>
      <UsersList users={users} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page } = query;
  const pageCount = page || "1";

  const users = await customAxios(
    `http://localhost:8000/api/v1/users?_page=${pageCount}&_limit=10`,
    "GET"
  );

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
