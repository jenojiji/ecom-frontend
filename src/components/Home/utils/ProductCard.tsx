import "./ProductCard.css";
import sampleProductImage from "../../../assets/sample-product.png";
import { Rate } from "antd";
function ProductCard() {
  return (
    <>
      <div className="card">
        <div className="image-section">
          <p className="discount">-40%</p>
          <img src={sampleProductImage} alt="Sample Product Image" />
        </div>
        <div className="content-section">
          <p className="product-name">Product Name</p>
          <p>
            <span className="effective-price">$120</span>
            <span className="actual-price">$160</span>
          </p>
          <Rate className="rate" allowHalf defaultValue={2.5} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
