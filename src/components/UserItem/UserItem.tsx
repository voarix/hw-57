import React from "react";
import { User } from "../../types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{user.name}</h5>
          <span className={`badge ${user.active ? "bg-success" : "bg-danger"}`}>
            {user.active ? "Active" : "Inactive"}
          </span>
        </div>
        <p className="card-text mb-1">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text mb-1">
          <strong>Role:</strong>{" "}
          <span className="text-capitalize">{user.role}</span>
        </p>
      </div>
    </div>
  );
};

export default UserItem;
