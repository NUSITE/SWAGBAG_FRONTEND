import React from "react";
import { useSelector } from "react-redux";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import "./SideBar.css";

const SideBar = () => {
  let showSidebar = useSelector((state) => state.sidebar.showSidebar);
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="uncover"
        direction="left"
        icon="labeled"
        inverted
        vertical
        visible={showSidebar}
        width="thin"
        className="sidebar__content"
      >
        <Menu.Item as="a">
          <div className="d-flex sidebar__items__content p-2">
            <Icon className="mr-4 ml-2" name="home" />
            Dashboard
          </div>
        </Menu.Item>
        <Menu.Item as="a">
          <div className="d-flex sidebar__items__content p-2">
            <Icon className="mr-4 ml-2" name="gamepad" />
            My Orders
          </div>
        </Menu.Item>
        <Menu.Item as="a">
          <div className="d-flex sidebar__items__content p-2">
            <Icon className="mr-4 ml-2" name="camera" />
            Settings
          </div>
        </Menu.Item>
      </Sidebar>
    </div>
  );
};

export default SideBar;
