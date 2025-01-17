import "./App.css";
import UserForm from "./components/UserForm/UserForm.tsx";
import { useState } from "react";
import { User } from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onAddUser = (newUser: User) => {
    setUsers(prevState => [...prevState, newUser]);
    console.log(users);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <UserForm onSubmitFormToAddUser={onAddUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
