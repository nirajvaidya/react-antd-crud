import { Table, Space } from "antd";

const TableComponet = ({ userData, setEditable, handleDelete }) => {
  const columns = [
    {
      title: "First name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Last name",
      dataIndex: "lastname",
      key: "lastname",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Discription",
      dataIndex: "discription",
      key: "discription",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={async () => {
              await setEditable({});
              setEditable(record);
            }}
            style={{ color: "#1890ff" }}
          >
            Edit {record.name}
          </a>
          <a onClick={() => handleDelete(record.id)} style={{ color: "red" }}>
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={userData} />;
};

export default TableComponet;
