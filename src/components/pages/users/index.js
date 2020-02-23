import React from "react";
import HeaderBar from "../../headerbar/index";

export default class Analytics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div style={{ marginLeft: "300px" }}>
                <HeaderBar name="Users" />
            </div>
        );
    }
}
