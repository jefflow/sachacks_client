import React from 'react';
import { StyledHeaderBar, StyledHeading, StyledOptions, Divider, StyledButton, StyledButtonAlt} from './style';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class HeaderBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <Divider></Divider>
                <StyledHeaderBar>
                    <StyledHeading>
                        <FontAwesomeIcon icon={faHome} />
                        {this.props.name}
                    </StyledHeading>
                    <StyledOptions>
                        <StyledButtonAlt>
                            More Actions
                            <FontAwesomeIcon icon={faChevronDown} />
                        </StyledButtonAlt>
                        <StyledButton>
                            <FontAwesomeIcon icon={faDesktop} />
                            Primary Action
                        </StyledButton>
                    </StyledOptions>
                </StyledHeaderBar>
            </>
        );
    }
}