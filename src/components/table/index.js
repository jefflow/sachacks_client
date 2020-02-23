import React from 'react';
import {} from './style';

import { Divider } from "../headerbar/style"
import { StyledTableHeader, rTable, rTableRow, rTableHead, rTableCell } from "./style"

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <>
                <StyledTableHeader>Table Example</StyledTableHeader>
                <Divider />

                
            </>
        );
    }
}