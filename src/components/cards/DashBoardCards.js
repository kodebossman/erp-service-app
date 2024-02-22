import React from "react";
import { Link } from "react-router-dom";
import { cilAlbum, cilApps, cilArrowCircleRight, cilArrowRight, cilChartPie } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CLink, CWidgetStatsF } from "@coreui/react";

const DashBoardCards = ({ cardTitle, footerText, cardRoute, icon }) => {
  return (
    <div style={{paddingTop:"20px"}}>
      <CWidgetStatsF
        className="mb-3"
        color="warning"
        to={`/${cardRoute}`}
        footer={
          <Link to={`/${cardRoute}`}>
           {footerText}
            <CIcon icon={cilArrowRight} className="float-end" width={16} />
         </Link>
        }
        icon={<CIcon icon={icon || cilApps} height={24} />}
        title={cardTitle}/>
        

    </div>
  );
};

export default DashBoardCards;