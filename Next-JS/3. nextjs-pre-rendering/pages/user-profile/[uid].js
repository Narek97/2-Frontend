import React from "react";

const UserIdPAge = ({ id }) => {
  return <h1>{id}</h1>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;

  return {
    props: {
      id: `userId-${userId}`,
    },
  };
}

export default UserIdPAge;
