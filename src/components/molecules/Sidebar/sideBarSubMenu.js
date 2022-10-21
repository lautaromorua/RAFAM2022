import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    align-items: center;
    padding: 20px;
    list-style: none;
    height:40px;
    text-decoration: none;
    font-size: 15px;
    flex-direction: column;
    &:hover {
    cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
`

const SubMenu = ({ item }) => {

    const [subNav, setSubnav] = useState(false)

    const showNav = () => setSubnav(!subNav)

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showNav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.tittle} </SidebarLabel>
                </div>
                <div>

                </div>
            </SidebarLink>
            {subNav && item.subNav.map((item, i) => {
                return (
                    <DropdownLink to={item.path} key={i}>
                        {item.icon}
                        <SidebarLabel>{item.tittle}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}


export default SubMenu