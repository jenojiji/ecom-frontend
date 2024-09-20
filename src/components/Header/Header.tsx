import "./Header.css";
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
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Signup</li>
        </ul>

        <input type="text" placeholder="What are you looking for?" />
      </div>
    </header>
  );
}

export default Header;
