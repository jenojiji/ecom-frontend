import ProductCard from "../../utils/ProductCard";
import "./BestSelling.css";
function BestSelling() {
  return (
    <>
      <div className="best-selling-container">
        <div className="best-selling-section">
          <div className="upper-section">
            <p className="title-one">This Month</p>
            <p className="title-two">Best Selling Products</p>
          </div>
          <div className="product-cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="view-more-button">
            <button>View All Products</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSelling;
