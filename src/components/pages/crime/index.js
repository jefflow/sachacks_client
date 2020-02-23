import React from "react";
import SearchBar from "components/searchbar/index.js";

import { StyledDrugContainer } from "../../drugContainer/style"
import CrimeData from "../../crime/index"

export default class Crime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div style={{ marginLeft: "300px", background: "white", boxShadow: "0px 3px 6px #0000000B" }}>
                    <SearchBar name="Crime" />
                </div>
                <div style={{ marginLeft: "300px" }}>
                    <StyledDrugContainer>
                        <CrimeData />
                    </StyledDrugContainer>
                </div>
            </>
        );
    }
}
