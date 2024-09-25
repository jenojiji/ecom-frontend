import BestSelling from "./Sections/BestSelling/BestSelling";
import Category from "./Sections/Category/Category";
import FlashSales from "./Sections/FlashSales/FlashSales";
import HomeHeader from "./Sections/HomeHeader/HomeHeader";
import Banner from "../../assets/banner.png";
import "./Home.css";
import ExploreProducts from "./Sections/ExploreProducts/ExploreProducts";
import KeyFeatures from "./Sections/KeyFeatures/KeyFeatures";
function Home() {
  return (
    <>
      <HomeHeader />
      <FlashSales />
      <Category />
      <BestSelling />
      <div className="banner">
        <img src={Banner} alt="" />
      </div>
      <ExploreProducts />
      <KeyFeatures/>
    </>
  );
}

export default Home;
