import React from "react";

const TableComponet = ({ users, deleteUser, handleEdit }) => (
  <table border="1">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.description}</td>
            <td>
              <button
                onClick={() => {
                  handleEdit(user);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No records</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TableComponet;
