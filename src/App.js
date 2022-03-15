import React, { useState } from "react";
import FormComponent from "./component/FormCompoent";
import TableComponet from "./component/TableComponent";
import "./App.css";

const initialFormState = {
  id: null,
  firstname: "",
  lastname: "",
  email: "",
  age: "",
  gender: "male",
  description: "",
};

const usersData = [
  {
    id: 1,
    firstname: "Niraj",
    lastname: "Vaidya",
    email: "nirajkumarv19997@gmail.com",
    age: 23,
    gender: "male",
    description: "I am react js developer",
  },
];
const App = () => {
  const [users, setUsers] = useState(usersData);
  const [editable, setEditable] = useState(initialFormState);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    setEditable(initialFormState);
  };

  const deleteUser = (id) => {
    setEditable({});
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setIsEdit(false);
    setEditable(initialFormState);
  };

  const handleEdit = (user) => {
    setIsEdit(true);
    setEditable(user);
  };

  return (
    <div className="App">
      <h1>Woyce CRUD Assignment (React Js)</h1>
      <FormComponent
        handleAddUser={handleAddUser}
        editable={editable}
        updateUser={updateUser}
        isEdit={isEdit}
        setEditable={setEditable}
        setIsEdit={setIsEdit}
      />
      <hr />
      <h3>Users Records</h3>
      <TableComponet
        users={users}
        deleteUser={deleteUser}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
