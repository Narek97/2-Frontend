import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchUsers } from "../store/reducers/ActionCreators";

const UserContainer = () => {
  // Redux Toolkit
  const dispatch = useAppDispatch();
  
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return <div>{JSON.stringify(users, null, 2)}</div>;
};

export default UserContainer;
