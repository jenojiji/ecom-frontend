import {
  CameraOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  LaptopOutlined,
  MobileOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import "./Category.css";

function Category() {
  return (
    <>
      <div className="categories-section">
        <div className="categories-row">
          <div className="content-section">
            <p className="title-one">Category</p>
            <p className="title-two">Browse by Category</p>
          </div>
          <div className="categories-tab">
            <div className="category">
              <MobileOutlined className="icon" />
              <p>Phones</p>
            </div>
            <div className="category">
              <LaptopOutlined className="icon" />
              <p>Computers</p>
            </div>
            <div className="category">
              <ClockCircleOutlined className="icon" />
              <p>Smartwatches</p>
            </div>
            <div className="category">
              <CameraOutlined className="icon" />
              <p>Camera</p>
            </div>
            <div className="category">
              <CustomerServiceOutlined className="icon" />
              <p>Headphones</p>
            </div>
            <div className="category">
              <TabletOutlined className="icon" />
              <p>Tablets</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
