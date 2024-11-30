import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { userRows } from "../../datas";

import "./UsersList.css";
import { Link } from "react-router-dom";

function UsersList() {
  const [userDatas, setUserDatas] = useState(userRows);

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
          <Link to="/">
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
  ];

  return (
    <div>
      <DataGrid
        rows={userDatas}
        columns={columns}
        autoPageSize
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default UsersList;
