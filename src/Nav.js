import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  const current = pathname === "/" ? "home" : pathname.slice(1);

  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">
            <ProfileOutlined />
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="protected">
          <Link to="/protected">
            <FileProtectOutlined />
            Protected
          </Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </div>
  );
};

export default Nav;
