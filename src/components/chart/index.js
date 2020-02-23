import React from "react";
import { Line } from "react-chartjs-2";

export default class DrugChart extends React.Component {
    render() {
        let data = {
            labels: ['jan', 'feb', 'march', 'april'],
            datasets: [
                {
                    backgroundColor: "rgba(142, 243, 197, 0.5)",
                    pointBackgroundColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointStyle: "circle",
                    label: "Monthly Expenses",
                    borderColor: "#2be1d8",
                    borderWidth: 3,
                    borderJoinStyle: "round",
                    lineTension: 0.3,
                    fontColor: "#fff",
                    hitRadius: 5,
                    hoverRadius: 8,
                    radius: 4,
                    data: [1, 2, 3, 4]
                }
            ]
        };

        return (
            <div className="expenseChart">
                <h2 className="expenseChart__name">{this.props.graphname}</h2>
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        aspectRatio: 3,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        display: false
                                    }
                                }
                            ]
                        },
                        layout: {
                            padding: {
                                right: 10
                            }
                        }
                    }}
                />
            </div>
        );
    }
}
