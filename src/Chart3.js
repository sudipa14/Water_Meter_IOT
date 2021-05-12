import { data } from "jquery";
import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const annual = [
    { label: "0-.25", y: 273000 },
    { label: ".25-.5", y: 487356 },
    { label: ".5-1", y: 782491 },
    { label: "1-5", y: 540000 },
    { label: "5-10", y: 1657898 },
    { label: "10-50", y: 2345678 },
    // { label: "28/3/21",  y: 30  },
    // { label: "29/3/21",  y: 25  } 
]
const d = []
class c extends Component {
    componentDidMount() {



    }
    constructor(props) {

        super(props);
        this.state = {
            option: {}
        }

    }
    render() {
        const options = {
			// title: {
			// 	text: "Basic Column Chart"
			// },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: annual,
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