import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class c extends Component {
	render() {
		const options = {
			// title: {
			// 	text: "Basic Column Chart"
			// },
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "22/3/21",  y: 10  },
					{ label: "23/3/21", y: 15  },
					{ label: "24/3/21", y: 25  },
					{ label: "25/3/21",  y: 30  },
					{ label: "26/3/21",  y: 28  },
                    { label: "27/3/21",  y: 29  },
                    { label: "28/3/21",  y: 30  },
                    { label: "29/3/21",  y: 25  }
				],
                gridThickness: 0,
                
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default c;  