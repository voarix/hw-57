import React from "react";
import UserItem from "./UserItem/UserItem.tsx";
import { User } from "../../types";

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <>
      {users.length === 0 ? (
        <p>No users yet</p>
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </>
  );
};

export default Users;
