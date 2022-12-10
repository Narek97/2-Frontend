import React, { FC } from "react";
import classes from "./user-item.module.scss";

interface UserItemProps {
  user: any;
  userDetailsHandler: (id: string) => void;
}

const UserItem: FC<UserItemProps> = ({ user, userDetailsHandler }) => {
  return (
    <div className={classes.user} onClick={() => userDetailsHandler(user.id)}>
      <h2>
        {user.name} - {user.username}
      </h2>
    </div>
  );
};

export default UserItem;
