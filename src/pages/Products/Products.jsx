import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { userRows } from "../../datas";

import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id !== userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userlist__user">
              <img
                src={params.row.avatar}
                alt="user"
                className="userlist__img"
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userlist__edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userlist__delete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
      width: 120,
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={userDatas}
        columns={columns}
        autoPageSize
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Products;
