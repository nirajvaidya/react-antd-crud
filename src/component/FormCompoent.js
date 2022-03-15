import React, { useState } from "react";
import { useEffect } from "react";
const initialFormState = {
  id: null,
  firstname: "",
  lastname: "",
  email: "",
  age: "",
  gender: "male",
  description: "",
};

const FormComponent = ({ handleAddUser, editable, isEdit, updateUser, setIsEdit, setEditable }) => {
  const [user, setUser] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(editable)
  }, [editable])

  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updateUser(editable.id, user)
    } else {
      handleAddUser(user);
    }
    setUser(initialFormState)
  }

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
    >
      <div className="form-group">
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group"><label>Age</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="input-group" value={user.gender} onChange={handleInputChange}>
        <label>Gender</label>
        <div>
          <label>Male</label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={user.gender === 'male'}
            required
          />
        </div>
        <div>
          <label>Female</label>
          <input
            type="radio"
            value="female"
            name="gender"
            defaultValue={user.gender}
            checked={user.gender === 'female'}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={user.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="submit-buuton">
        <button> {isEdit ? `Update user` : `Add user`}</button>
        {
          isEdit && <button onClick={() => {
            setEditable(initialFormState)
            setIsEdit(false)
          }}>Clear</button>
        }
      </div>
    </form>
  );
};

export default FormComponent;
