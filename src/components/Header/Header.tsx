import { Link } from "react-router-dom";
import "./Header.css";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
function Header() {
  return (
    <header className="container-fluid">
      <div className="  notification-bar row">
        <div className="notification-text col-10">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span>Shop now</span>
        </div>
        <div className="language-switcher col-2">
          <select name="language" id="lang-select" className="language-select">
            <option value="en">English</option>
            <option value="ga">German</option>
          </select>
        </div>
      </div>
      <div className=" main-header">
        <p>Exclusive</p>

        <ul>
          <li>
            <Link to={"/"} className="header-button">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="header-button">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="header-button">
              About
            </Link>
          </li>
          <li>
            <Link to={"/register"} className="header-button">
              Signup
            </Link>
          </li>
        </ul>

        <input type="text" placeholder="What are you looking for?" />
        <div className="header-icons">
          <Link to={"/wishlist"} className="header-button">
            <HeartOutlined className="icon" />
          </Link>
          <ShoppingCartOutlined className="icon" />
          <UserOutlined className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
