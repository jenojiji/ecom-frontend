import ProductCard from "../../utils/ProductCard";
import "./ExploreProducts.css";
function ExploreProducts() {
  return (
    <>
      <div className="explore-products-container">
        <div className="explore-products-section">
          <div className="upper-section">
            <p className="title-one">Our Products</p>
            <p className="title-two">Explore Our Products</p>
          </div>
          <div className="product-cards">
            <div className="products-card-firstrow">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="products-card-secondrow">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className="view-more-button">
            <button>View All Products</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreProducts;
