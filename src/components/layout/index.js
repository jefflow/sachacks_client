import React from 'react';
import {} from './style';
import Navbar from "../navbar/index"
import AdminBar from "../adminBar/index"
import HeaderBar from "../headerbar/index"

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <AdminBar />
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}