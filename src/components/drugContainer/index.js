import React from 'react';
import { StyledDrugContainer, StyledContentContainer, StyledContentMain, StyledHeadingPrimary, StyledHeadingSecondary, StyledNormalText } from "./style";
import DrugChart from "../../components/chart/index"

import { connect } from "react-redux";
import { setStateView } from "actions/index.js"

class DrugContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        
        return (
            <StyledDrugContainer>
                <StyledContentContainer>
                    <StyledContentMain>
                        <StyledHeadingPrimary>TOP 10 Drug Content By State | 2015</StyledHeadingPrimary>
                        {/* <StyledNormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris ipsum, volutpat eu egestas nec, tristique sit amet mi. Mauris pulvinar mauris non auctor viverra. In et sem vel ipsum scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris ipsum, volutpat eu egestas nec, tristique sit amet mi. Mauris pulvinar mauris non auctor viverra. In et sem vel ipsum scelerisque luctus.</StyledNormalText> */}
                    </StyledContentMain>

                    <StyledContentMain>
                        <StyledHeadingSecondary>{this.props.state} State</StyledHeadingSecondary>
                        {/* <StyledNormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris ipsum, volutpat eu egestas nec, tristique sit amet mi. Mauris pulvinar mauris non auctor viverra. In et sem vel ipsum scelerisque luctus.</StyledNormalText> */}
                    </StyledContentMain>

                    <StyledContentMain>
                        <DrugChart />
                    </StyledContentMain>
                </StyledContentContainer>
            </StyledDrugContainer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setStateView: state => {
            dispatch(setStateView(state));
        }
    };
};

const mapStateToProps = state => ({
    state: state.app.state
});

export default connect(mapStateToProps, mapDispatchToProps)(DrugContainer)