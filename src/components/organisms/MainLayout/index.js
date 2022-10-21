import React from "react";

import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";
import TemplateConfig from "components/templates/List/templateConfig";
import "./styles.scss";


const MainLayout = ({ showHeader = true }) => {

    return <div className="desktop-main-layout-container">
        <Sidebar ></Sidebar>
        <div className='right-layout-container'>
            {showHeader && <BaseHeader></BaseHeader>}
            <div className='right-layout-content'>
                <TemplateConfig></TemplateConfig>
                <TemplateConfig ></TemplateConfig>
            </div>
        </div>
    </div>
}

export default MainLayout;





