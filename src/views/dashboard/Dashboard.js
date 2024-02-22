import {React, useEffect} from "react";
import { CRow,CCol} from "@coreui/react";

import DashBoardCards from "../../components/cards/DashBoardCards";

import { cilAddressBook, cilCalculator, cilSpeech, cilPeople } from "@coreui/icons";

const Dashboard = () => { // eslint-disable-next-line

    const dashboardMenu = [
        {
            cardTitle: "New Application",
            footerText: "Apply",
            cardRoute: "registration",
            icon: cilAddressBook
        },{
            cardTitle: "View All Applications",
            footerText: "View Applications",
            cardRoute: "applications",
            icon: cilPeople
        }
           
       
     
    ]
    
    return (<div className="animated fadeIn">

            <CRow className="align-items-center">
         {
            dashboardMenu.map((item, i) =>

            <CCol xs="12" sm="6" lg="3"
                key={i}>
                <DashBoardCards cardTitle={
                        item.cardTitle
                    }
                    footerText={
                        item.footerText
                    }
                    cardRoute={
                        item.cardRoute
                    }
                    icon = {item.icon}

                    />
            </CCol>)
        }
        </CRow>
      
    </div>);
};

export default Dashboard;