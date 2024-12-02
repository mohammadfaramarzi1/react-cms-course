import { Link } from "react-router-dom";

import Chart from "../../components/Chart/Chart";
import { productsData } from "../../datas";

import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__title-container">
        <h1 className="product__title">Product</h1>
        <Link to="/newProduct" className="link">
          <button className="product__add-btn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart title="Sale In Month" data={productsData} dataKey="sale" />
        </div>
        <div className="product-top-right"></div>
      </div>
    </div>
  );
}

export default Product;
