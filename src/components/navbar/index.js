import React from 'react';
import { StyledNavbar, StyledNavInner, StyledLabel, StyledNavMenu, StyledNavContent, StyledSocialContainer, StyledSocial, StyledImg, Divider } from './style';
import icon from "../../assets/notification-icon.svg"
import placeholder from "../../assets/placeholder.jpg"
import arrowBottom from "../../assets/arrow-bottom.svg"

import { toggleAdminBarView } from "../../actions/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleAdminBarView = this.handleAdminBarView.bind(this);
    }

    handleAdminBarView() {
        this.props.toggleAdminBarView(!this.props.adminBarView);
        console.log("trigger", !this.props.adminBarView);
    }

    render() {
        return (
            <StyledNavbar>
                <StyledNavInner>
                    <StyledNavContent onClick={this.handleAdminBarView}>
                        <StyledNavMenu></StyledNavMenu>
                        <StyledNavMenu></StyledNavMenu>
                        <StyledNavMenu></StyledNavMenu>
                    </StyledNavContent>
                    <StyledLabel>Menu</StyledLabel>
                </StyledNavInner>

                <StyledSocialContainer>
                    <StyledSocial>
                        <FontAwesomeIcon size="2x" icon={faBell} />
                    </StyledSocial>
                    <Divider></Divider>
                    <StyledSocial>
                        <StyledImg src={placeholder} />
                    </StyledSocial>
                    <StyledSocial>
                        <FontAwesomeIcon size="2x" icon={faChevronDown} />
                    </StyledSocial>
                </StyledSocialContainer>
            </StyledNavbar>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleAdminBarView: toggle => {
            dispatch(toggleAdminBarView(toggle));
        }
    };
};

const mapStateToProps = state => ({
    adminBarView: state.app.adminBarView
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);