import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { customAxios } from "../../utils/axios";
import { useRouter } from "next/router";

interface UserDetailPageProps {
  user: { email: string; name: string; message?: string };
}

const UserDetailPage: FC<UserDetailPageProps> = ({ user }) => {
  const router = useRouter();

  //if fallback true
  if (router.isFallback) {
    return <div>!!Loading...</div>;
  }

  if (user.message) {
    return <h2>{user.message}!!</h2>;
  }

  return (
    <div>
      <h2>{user?.email}</h2>
      <h2>{user?.name}</h2>
    </div>
  );
};

export default UserDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userId = params?.userId;
  const user = await customAxios(
    `http://localhost:8000/api/v1/users/${userId}`,
    "GET"
  );

  //show 404 if not fond user
  if (user?.response?.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
    },
    revalidate: 25,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await customAxios(
    `http://localhost:8000/api/v1/users?_page=1&_limit=10`,
    "GET"
  );

  return {
    paths: users.map((user: any) => ({
      params: {
        userId: user.id.toString(),
      },
    })),
    fallback: true,
  };
};
