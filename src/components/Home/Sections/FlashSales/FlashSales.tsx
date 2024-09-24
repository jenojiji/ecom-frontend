import ProductCard from "../../utils/ProductCard";
import "./FlashSales.css";
function FlashSales() {
  return (
    <>
      <div className="flash-sales-section">
        <div className="upper-section">
          <p className="title-one">Today's</p>
          <p className="title-two">Flash Sales</p>
        </div>
        <div className="product-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="view-more-button">
          <button>View All Products</button>
        </div>
      </div>
    </>
  );
}

export default FlashSales;
