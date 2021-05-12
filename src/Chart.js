import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class can extends Component {
    //   render() {const options = {
    //       title: {
    //         text: "Basic Column Chart in React"
    //       },
    //       data: [{				
    //                 type: "column",
    //                 dataPoints: [
    //                     { label: "Apple",  y: 10  },
    //                     { label: "Orange", y: 15  },
    //                     { label: "Banana", y: 25  },
    //                     { label: "Mango",  y: 30  },
    //                     { label: "Grape",  y: 28  }
    //                 ]
    //        }]
    //    }

    //    return (
    //       <div>
    //         <CanvasJSChart options = {options}
    //             /* onRef = {ref => this.chart = ref} */
    //         />
    //       </div>
    //     );
    //   }
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            visible: false,
            theme: "light1", // "light1", "dark1", "dark2"
            // title: {
            //     text: "Flow vs Time",

            // },
            axisY: {
                title: "Flow",
                gridThickness: 0,
                stripLines: [
                    {
                        value: 0,
                        showOnTop: true,
                        color: "gray",
                        thickness: 2
                    }
                ]

            },
            axisX: {
                title: "Time",
                // prefix: "W",
                interval: 5
            },
            data: [{
                type: "line",
                toolTipContent: "Week {x}: {y}%",
                dataPoints: [
                    { x: 1, y: 20 },
                    { x: 2, y: 30 },
                    { x: 3, y: 35 },
                    { x: 4, y: 40 },
                    { x: 5, y: 35 },
                    { x: 6, y: 30 },
                    { x: 7, y: 35 },
                    { x: 8, y: 40 },
                    { x: 9, y: 45 },
                    { x: 10, y: 50 },
                    { x: 11, y: 55 },
                    { x: 12, y: 60 },
                    { x: 13, y: 55 },
                    { x: 14, y: 40 },
                    { x: 15, y: 30 },
                    { x: 16, y: 35 },
                    { x: 17, y: 48 },
                    { x: 18, y: 49 },
                    { x: 19, y: 50 },
                    { x: 20, y: 40 },
                    { x: 21, y: 30 },
                    { x: 22, y: 27 },
                    { x: 23, y: 37 }
                ]
            }]
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

export default can;
