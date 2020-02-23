import React from 'react';
import {} from './style';
import { Line } from "react-chartjs-2";
import { Divider } from "../headerbar/style"
import { StyledTableHeader, rTable, rTableRow, rTableHead, rTableCell } from "./style"

import { connect } from "react-redux";

import { getDeathByStateData } from "actions/index.js"

class DeathData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.props.getDeathByStateData("CALIFORNIA")
    }

    getData() {
        let x_label = this.props.death.map( data => {
            return data.Year + data.Month
        })
        let y_label = this.props.death.map( data => {
            return data.data_value
        })
        let data = {
            labels: x_label,
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
                    text:`Times Series with respect to casualties people using Opioid`,
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
                <StyledTableHeader>Death Time Analysis</StyledTableHeader>
                <Divider /> 
                {
                    this.props.death[0] ?
                        <Line
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
        getDeathByStateData: state => {
            dispatch(getDeathByStateData(state));
        }
    };
};

const mapStateToProps = state => ({
    death: state.app.death
});

export default connect(mapStateToProps, mapDispatchToProps)(DeathData)