import {
  CarOutlined,
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import "./KeyFeatures.css";

function KeyFeatures() {
  return (
    <>
      <div className="key-features-section">
        <div className="key-features-row">
          <div className="feature">
            <div className="icon">
              <CarOutlined />
            </div>
            <p className="feature-title">FREE AND FAST DELIVERY</p>
            <p className="description">
              Free delivery for all orders over $140
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <CustomerServiceOutlined />
            </div>
            <p className="feature-title">24/7 CUSTOMER SERVICE</p>
            <p className="description">Friendly 24/7 customer support</p>
          </div>
          <div className="feature">
            <div className="icon">
              <SafetyCertificateOutlined />
            </div>
            <p className="feature-title">MONEY BACK GUARANTEE</p>
            <p className="description">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyFeatures;
