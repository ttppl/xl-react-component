import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "../config/routes";

export default function () {
  const navigate = useNavigate();
  return (
    <Space>
      {routes.map((route) => {
        return (
          <Button key={route.path} onClick={() => navigate(route.path)}>
            {route.name}
          </Button>
        );
      })}
    </Space>
  );
}
