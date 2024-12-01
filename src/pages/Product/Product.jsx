import { Link } from "react-router-dom";
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
    </div>
  );
}

export default Product;
