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
            theme: "light1", // "light1", "dark1", "dark2"
            // title: {
            //     text: "Flow vs Time",

            // },
            axisY: {
                title: "Consumption",
                gridThickness: 0,
                suffix: "M",
                stripLines: [
                    {
                        value: 0,
                        showOnTop: true,
                        color: "gray",
                        thickness: 2
                    }
                ],
                

            },
            axisX: {
                title: "Date-April",
                // prefix: "W",
                interval: 1
            },
            data: [{
                type: "line",
                toolTipContent: "April {x}: {y}%",
                dataPoints: [
                    { x: 1, y: 80 },
                    { x: 2, y: 90 },
                    { x: 3, y: 78 },
                    { x: 4, y: 80 },
                    { x: 5, y: 85 },
                    { x: 6, y: 90 },
                    { x: 7, y: 95 },
                   
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
