import React from 'react';
import { StyledAdminBar, StyledClose, StyledAdminHeader, StyledAdminHeaderBold, StyledAdminLink, StyledLinkLabel, StyledLinkIcon } from './style';

import { toggleAdminBarView } from "../../actions/index"

import { connect } from "react-redux";

import { Link } from "react-router-dom";


import homeIcon from "../../assets/home.svg"
import analyticsIcon from "../../assets/analytics.svg"
import usersIcon from "../../assets/users.svg"
import settingsIcon from "../../assets/settings.svg"

class AdminBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleAdminBarView = this.handleAdminBarView.bind(this);
    }

    handleAdminBarView() {
        this.props.toggleAdminBarView(!this.props.adminBarView);
        console.log("trigger", !this.props.adminBarView)
    }

    render() {
        return (
            <StyledAdminBar style={{ display: this.props.adminBarView ? "" : "none" }}>
                <StyledClose onClick={this.handleAdminBarView}>Close</StyledClose>
                <StyledAdminHeader>
                    <StyledAdminHeaderBold>Hackathon</StyledAdminHeaderBold>
                    Project
                </StyledAdminHeader>

                <Link to="home" style={{ textDecoration: "none" }}>
                    <StyledAdminLink>
                        <StyledLinkIcon src={homeIcon} alt="home"></StyledLinkIcon>
                        <StyledLinkLabel>Home</StyledLinkLabel>
                    </StyledAdminLink>
                </Link>

                <Link to="analytics" style={{ textDecoration: "none" }}>
                    <StyledAdminLink>
                        <StyledLinkIcon src={analyticsIcon} alt="analytics"></StyledLinkIcon>
                        <StyledLinkLabel>Analytics</StyledLinkLabel>
                    </StyledAdminLink>
                </Link>

                <Link to="users" style={{ textDecoration: "none" }}>
                    <StyledAdminLink>
                        <StyledLinkIcon src={usersIcon} alt="users"></StyledLinkIcon>
                        <StyledLinkLabel>Users</StyledLinkLabel>
                    </StyledAdminLink>
                </Link>

                <Link to="settings" style={{ textDecoration: "none" }}>
                    <StyledAdminLink>
                        <StyledLinkIcon src={settingsIcon} alt="settings"></StyledLinkIcon>
                        <StyledLinkLabel>Settings</StyledLinkLabel>
                    </StyledAdminLink>
                </Link>
            </StyledAdminBar>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar);