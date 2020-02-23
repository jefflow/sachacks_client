import React from 'react';
import SearchBar from "../../searchbar/index"
import DrugContainer from "../../drugContainer/index"

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div style={{ marginLeft: "300px", background: "white", boxShadow: "0px 3px 6px #0000000B" }}>
                    <SearchBar name="Opioid Search" />
                </div>

                <div style={{ marginLeft: "300px" }}>

                    <DrugContainer />
                </div>
            </>
        );
    }
}