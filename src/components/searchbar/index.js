import React from "react";
import { StyledHeaderBar, StyledHeading, StyledOptions, Divider, StyledButton, StyledButtonAlt } from "../headerbar/style";
import { StyledSearchContainer, StyledSearchIcon, StyledSearch } from "./style.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import { getDrugByStateData, setStateView } from "actions/index.js"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "State": null
        };
    }

    changeSearchWord(e) {
        e.preventDefault()
        this.setState({
            "State" : e.target.value
        })
    }

    getState(e) {
        if (e.keyCode === 13 || e.key === "Enter") {
            e.preventDefault()
            
            this.props.getDrugByStateData(this.state.State)
            this.props.setStateView(this.state.State)
            e.target.value = ""

        }    
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
                            <StyledSearch 
                                onChange={(e) => this.changeSearchWord(e)}
                                onKeyPress={(e) => this.getState(e)}
                            ></StyledSearch>
                            
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

const mapDispatchToProps = dispatch => {
    return {
        getDrugByStateData: state => {
            dispatch(getDrugByStateData(state));
        },
        setStateView : state => {
            dispatch(setStateView(state))
        }
    };
};

const mapStateToProps = state => ({
    drug: state.app.drug,
    state: state.app.state
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
