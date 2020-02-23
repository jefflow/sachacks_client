import React from 'react';
import { StyledDrugContainer, StyledContentContainer, StyledContentMain, StyledHeadingPrimary, StyledHeadingSecondary, StyledNormalText } from "./style";
import DrugChart from "../../components/chart/index"

export default class DrugContainer extends React.Component {
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
                        <StyledHeadingPrimary>Morphine</StyledHeadingPrimary>
                        <StyledNormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris ipsum, volutpat eu egestas nec, tristique sit amet mi. Mauris pulvinar mauris non auctor viverra. In et sem vel ipsum scelerisque luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris ipsum, volutpat eu egestas nec, tristique sit amet mi. Mauris pulvinar mauris non auctor viverra. In et sem vel ipsum scelerisque luctus.</StyledNormalText>
                    </StyledContentMain>

                    <StyledContentMain>
                        <StyledHeadingSecondary>The data</StyledHeadingSecondary>
                        <StyledNormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mauris ipsum, volutpat eu egestas nec, tristique sit amet mi. Mauris pulvinar mauris non auctor viverra. In et sem vel ipsum scelerisque luctus.</StyledNormalText>
                    </StyledContentMain>

                    <StyledContentMain>
                        <DrugChart />
                    </StyledContentMain>
                </StyledContentContainer>
            </StyledDrugContainer>
        );
    }
}