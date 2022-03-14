import TableComponet from "./component/TableComponent";
import FormComponent from "./component/FormCompoent";
import "./App.css";
import "antd/dist/antd.variable.min.css";
import { useState, useEffect } from "react";
import { deletData, getData } from "./api/BaseApi";
import FormCompoentEdit from "./component/FormCompoentEdit";
import Header from "./component/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Divider } from "antd";

function App() {
  const [userData, setUserData] = useState([]);
  const [editable, setEditable] = useState({});

  const handleDelete = (id) => {
    deletData(`userTable/${id}`).then((response) => {
      const newUserData = [...userData];
      setUserData([...newUserData.filter((item) => item.id !== id)]);
      toast.success("You have deleted successfully.");
      setEditable({});
    });
  };

  useEffect(() => {
    getData("userTable").then((response) => {
      setUserData(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="p-4 form-component">
        {Object.keys(editable).length ? (
          <FormCompoentEdit
            setUserData={setUserData}
            userData={userData}
            setEditable={setEditable}
            editable={editable}
          />
        ) : (
          <FormComponent
            setUserData={setUserData}
            userData={userData}
            setEditable={setEditable}
            editable={editable}
          />
        )}
      </div>
      <Divider>Form Records</Divider>
      <TableComponet
        setUserData={setUserData}
        userData={userData}
        setEditable={setEditable}
        editable={editable}
        handleDelete={handleDelete}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
