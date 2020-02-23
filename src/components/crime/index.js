import React from 'react';
import {} from './style';
import { Bar } from "react-chartjs-2";
import { Divider } from "../headerbar/style"
import { StyledTableHeader, rTable, rTableRow, rTableHead, rTableCell } from "./style"

import { connect } from "react-redux";

import { getCrimeByStateData } from "actions/index.js"

class CrimeData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.props.getCrimeByStateData("CALIFORNIA")
    }

    getData() {
        console.log(this.props.crime)
        let y_label = [
            this.props.crime[0].larceny,
            this.props.crime[0].burglary,
            this.props.crime[0].assault,
            this.props.crime[0].vehicle_theft
        ]
        let data = {
            labels: ["larceny", "burglary", "assault", "vehicle_theft"],
            datasets: [
                {
                    label: 'TOP 10',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: y_label || []
                }
            ]
        }
        
        return data
    }

    getOptions() {
        let options = {
                title:{
                    display:true,
                    text:`TOP 4 CRIMES`,
                    fontSize:30
                },
                legend:{
                    display:true,
                    position:'right'
                },
                maintainAspectRatio: true
        }

        return options
    }

    getWidth() {
        return 100
    }

    getHeight() {
        return 30
    }

    render() {

        return(
            <>
                <StyledTableHeader>Crime Category | 2015</StyledTableHeader>
                <Divider /> 
                {
                    this.props.crime[0] ?
                        <Bar
                        data={this.getData()}
                        width={this.getWidth()}
                        height={this.getHeight()}
                        options={this.getOptions()}
                        />
                    :
                        null
                }
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCrimeByStateData: state => {
            dispatch(getCrimeByStateData(state));
        }
    };
};

const mapStateToProps = state => ({
    crime: state.app.crime
});

export default connect(mapStateToProps, mapDispatchToProps)(CrimeData)