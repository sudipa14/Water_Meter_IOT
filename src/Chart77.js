import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class c extends Component {
    render() {
        const options = {
            // title: {
            // 	text: "Weekly(blue), "
            // },
            height: 300,
            axisX: {
                title: "Meter ",
            },
            axisY: {
                title: "Consumption",
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    name: "Weekly",
                    type: "column",
                    color:"#226327",
                    showInLegend: true,
                    dataPoints: [
                        { label: "10/12/19", y: 1200000 },
                        { label: "10/15/19", y: 250000 },
                        { label: "10/18/19", y: 300000 },

                    ],
                    
                },
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    name:"daily",
                    type: "column",
                    showInLegend: true,
                    color:"#632257",
                    dataPoints: [
                        { label: "10/12/19", y: 500000 },
                        { label: "10/15/19", y: 1150000 },
                        { label: "10/18/19", y: 1000000 },

                    ],
                    
                },

            ]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default c;