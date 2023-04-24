import "./styles.css";
import { FloatButton } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Outlet />
      <FloatButton
        onClick={() => {
          navigate("/");
        }}
        icon={<HomeOutlined />}
        shape="circle"
        style={{ right: 20, bottom: 20 }}
      />
      <FloatButton.BackTop
        style={{ right: 20, bottom: 70 }}
        visibilityHeight={1}
      />
    </div>
  );
}
