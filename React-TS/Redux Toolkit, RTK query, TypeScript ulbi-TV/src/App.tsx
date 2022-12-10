import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <div>
      {/*<UserContainer />*/}
      <PostContainer />
    </div>
  );
};

export default App;
