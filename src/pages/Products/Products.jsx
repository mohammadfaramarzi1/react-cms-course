import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { products } from "../../datas";

import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
  const [productsDatas, setProductsDatas] = useState(products);

  console.log("Products", productsDatas);

  const productDelete = (productID) => {
    setProductsDatas(
      productsDatas.filter((product) => product.id !== productID)
    );
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userlist__user">
              <img
                src={params.row.avatar}
                alt="user"
                className="userlist__img"
              />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userlist__edit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userlist__delete"
              onClick={() => productDelete(params.row.id)}
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
        rows={products}
        columns={columns}
        autoPageSize
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default Products;
