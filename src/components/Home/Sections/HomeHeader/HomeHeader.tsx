import banner from "../../../../assets/home-header-banner.png";
import "./HomeHeader.css";
function HomeHeader() {
  return (
    <>
    <div className="home-header">
        <div className="home-header-left">
          <ul>
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="home-header-right">
          <img src={banner} alt="Header Banner" className="banner-image" />
        </div>
      </div>
    </>
  )
}

export default HomeHeader