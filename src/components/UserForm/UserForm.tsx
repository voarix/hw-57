import React, { useState } from "react";
import { User, UserMutation } from "../../types";

interface Props {
  onSubmitFormToAddUser: (newUser: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmitFormToAddUser }) => {
  const [form, setForm] = useState<UserMutation>({
    name: "",
    email: "",
    role: "",
    active: false,
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkBox = () => {
    setForm((prevState) => ({ ...prevState, active: !prevState.active }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitFormToAddUser({ id: String(new Date().toISOString()), ...form });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group mt-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          className="form-control"
          value={form.name}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email"
          className="form-control"
          value={form.email}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          value={form.role}
          onChange={inputChangeHandler}
          className="form-control"
        >
          <option value="" disabled>
            Выберите роль
          </option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="active">Is active: </label>
        <input
          type="checkbox"
          id="active"
          name="active"
          checked={form.active}
          onChange={checkBox}
          className="form-check-input"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Send
      </button>
    </form>
  );
};

export default UserForm;
