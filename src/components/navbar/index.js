import React from 'react';
import { StyledNavbar } from './style';
import { connect } from "react-redux";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <StyledNavbar>
                hi
            </StyledNavbar>
        );
    }
}

const mapStateToProps = state => ({
    
});



export default connect(mapStateToProps)(Navbar);