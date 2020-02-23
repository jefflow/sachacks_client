import React from "react";
import SearchBar from "components/searchbar/index.js";
import DeathData from "components/death/index.js"
import { StyledDrugContainer } from "../../drugContainer/style"

export default class Deaths extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div style={{ marginLeft: "300px", background: "white", boxShadow: "0px 3px 6px #0000000B" }}>
                    <SearchBar name="Deaths" />
                </div>
                <div style={{ marginLeft: "300px" }}>
                    <StyledDrugContainer>
                        <DeathData />
                    </StyledDrugContainer>
                </div>
                
            </>
        );
    }
}
