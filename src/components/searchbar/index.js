import React from "react";
import { StyledHeaderBar, StyledHeading, StyledOptions, Divider, StyledButton, StyledButtonAlt } from "../headerbar/style";
import { StyledSearchContainer, StyledSearchIcon, StyledSearch } from "./style.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <Divider></Divider>
                <StyledHeaderBar>
                    <StyledHeading>
                        <FontAwesomeIcon icon={faSearch} />
                        {this.props.name}
                        <StyledSearchContainer>
                            <StyledSearch></StyledSearch>
                            <StyledSearchIcon>
                                <FontAwesomeIcon style={{width: "1em"}} icon={faSearch} />
                            </StyledSearchIcon>
                        </StyledSearchContainer>
                    </StyledHeading>
                </StyledHeaderBar>
            </>
        );
    }
}
