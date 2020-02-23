import React from "react";
import HeaderBar from "../../headerbar/index";

import { StyledDrugContainer } from "../../drugContainer/style"
import DataTable from "../../../components/table/index"

export default class Analytics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div style={{ marginLeft: "300px", background: "white", boxShadow: "0px 3px 6px #0000000B" }}>
                    <HeaderBar name="Analytics" />
                </div>
                <div style={{ marginLeft: "300px" }}>
                    <StyledDrugContainer>
                        <DataTable />
                    </StyledDrugContainer>
                </div>
            </>
        );
    }
}
