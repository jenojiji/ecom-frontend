import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className=" col ">
          <ul>
            <li id="footer-name">Exclusive</li>
            <li className="foooter-subtitle">Subscribe</li>
            <li>Get 10% of your first order</li>
            <li>
              <input type="email" name="email" className="email-input" />
            </li>
          </ul>
        </div>
        <div className=" col">
          <ul >
            <li className="foooter-subtitle">Support</li>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="foooter-subtitle">My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Whishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="foooter-subtitle">Quick Links</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
