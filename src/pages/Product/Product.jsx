import { Link, useParams } from "react-router-dom";

import Chart from "../../components/Chart/Chart";
import { productsData, products } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

import "./Product.css";

function Product() {
  const { productID } = useParams();
  const currentProductData = products.find(
    (product) => product.id === +productID
  );
  console.log(currentProductData);

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
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src={`/${currentProductData.avatar}`}
              alt="product"
              className="product-info__img"
            />
            <span className="product-info__name">
              {currentProductData.title} Laptop
            </span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info__item">
              <div className="product-info__key">ID:</div>
              <div className="product-info__value">{currentProductData.id}</div>
            </div>
            <div className="product-info__item">
              <div className="product-info__key">Name:</div>
              <div className="product-info__value">
                {currentProductData.title} Laptop
              </div>
            </div>
            <div className="product-info__item">
              <div className="product-info__key">Sales:</div>
              <div className="product-info__value">$200000</div>
            </div>
            <div className="product-info__item">
              <div className="product-info__key">Active:</div>
              <div className="product-info__value">Yes</div>
            </div>
            <div className="product-info__item">
              <div className="product-info__key">In Store:</div>
              <div className="product-info__value">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product__form">
          <div className="product__form-left">
            <label htmlFor="name">Product Name</label>
            <input type="text" placeholder="Name" id="name" />
            <label htmlFor="stock">In Stock</label>
            <select name="stock" id="stock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product__form-right">
            <div className="product__uploader">
              <img
                src={`/${currentProductData.avatar}`}
                alt="profile img"
                className="product__uploader-img"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="product__btn">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
