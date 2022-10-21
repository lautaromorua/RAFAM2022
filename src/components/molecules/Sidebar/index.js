import React from "react";

import LoginHeader from "components/atoms/LoginHeader";
import { isMobile } from 'helpers/Mobile';
import { SidebarData } from "./sidebarData";
import SubMenu from "./sideBarSubMenu";

import "./styles.scss";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
    return <div className="sidebar-container" >

        {!isMobile &&
            <LoginHeader></LoginHeader>
        }
        <p className="logo-style">RAFAM 2</p>
        <>
            <Nav>
                {SidebarData.map((item, i) => {
                    return <SubMenu item={item} key={i}></SubMenu>
                })}

            </Nav>

            {isMobile && <div className="menu-line">
            </div>}
        </>
    </div>
}

export default Sidebar;
