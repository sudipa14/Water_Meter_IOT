import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class c extends Component {
    render() {
        const options = {
            
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
                    type: "column",
                    dataPoints: [
                        { label: "Meter 1", y: 10 },
                        { label: "Meter 2", y: 8 },

                    ],
                    gridThickness: 0,

                }
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