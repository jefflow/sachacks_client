import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { connect } from "react-redux";

import { getDrugByStateData } from "actions/index.js"
import { drug_chart } from "components/chart/style.js"


class DrugChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.props.getDrugByStateData("CALIFORNIA")     
    }

    getData(type) {
        let data = {
            labels: this.props.drug[type].x_axis || [],
            datasets: [
                {
                    label: 'TOP 10',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: this.props.drug[type].y_axis || []
                }
            ]
        }
        
        return data
    }

    getOptions(type) {
        let options = {
                title:{
                    display:true,
                    text:`Drugs vs. Total number of ${type}`,
                    fontSize:10
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

        return (
            <div className="expenseChart">
                <h2 className="expenseChart__name">{this.props.graphname}</h2>
                <div className="drug_chart" style={drug_chart}>

                    {
                        this.props.drug.user ?
                        <HorizontalBar
                        data={this.getData("user")}
                        width={this.getWidth()}
                        height={this.getHeight()}
                        options={this.getOptions("users")}
                        />
                        :
                        null
                    }

                    {
                        this.props.drug.order ?
                        <HorizontalBar
                        data={this.getData("order")}
                        width={this.getWidth()}
                        height={this.getHeight()}
                        options={this.getOptions("order")}
                        />
                        :
                        null
                    }

                    {
                        this.props.drug.supply ?
                        <HorizontalBar
                        data={this.getData("supply")}
                        width={this.getWidth()}
                        height={this.getHeight()}
                        options={this.getOptions("supplies commulative days")}
                        />
                        :
                        null
                    }

                    {
                        this.props.drug.cost ?
                        <HorizontalBar
                        data={this.getData("cost")}
                        width={this.getWidth()}
                        height={this.getHeight()}
                        options={this.getOptions("cost")}
                        />
                        :
                        null
                    }
                </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDrugByStateData: state => {
            dispatch(getDrugByStateData("CALIFORNIA"));
        }
    };
};

const mapStateToProps = state => ({
    drug: state.app.drug
});

export default connect(mapStateToProps, mapDispatchToProps)(DrugChart)

