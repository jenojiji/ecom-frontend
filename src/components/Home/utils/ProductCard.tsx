import "./ProductCard.css";
import sampleProductImage from "../../../assets/sample-product.png";
function ProductCard() {
  return (
    <>
      <div className="card">
        <div className="image-section">
          <img src={sampleProductImage} alt="Sample Product Image" />
        </div>
        <div className="content-section">
          <p>Product Name</p>
          <p>
            <span>$120</span>
            <span>$160</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
