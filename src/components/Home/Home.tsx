import Category from "./Sections/Category/Category";
import FlashSales from "./Sections/FlashSales/FlashSales";
import HomeHeader from "./Sections/HomeHeader/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      <FlashSales />
      <Category />
    </>
  );
}

export default Home;
