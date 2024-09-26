import ProductCard from "../Home/utils/ProductCard";
import "./Wishlist.css";

function Wishlist() {
  return (
    <>
      <div className="best-selling-container">
        <div className="best-selling-section">
          <div className="upper-section">
            <p className="title-two">Wishlist(4)</p>
          </div>
          <div className="product-cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="buttons">
            <button>View All Items </button>
            <button>Move All to Cart </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
