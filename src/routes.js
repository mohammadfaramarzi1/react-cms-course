import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import UsersList from "./pages/UsersList/UsersList";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "newUser", element: <NewUser /> },
  { path: "products", element: <Products /> },
  { path: "product/:productID", element: <Product /> },
];

export default routes;
