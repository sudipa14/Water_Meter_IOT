
import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class c extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				// text: "Nuclear Electricity Generation in US"
			},
			
            axisX: {
				title: "Time",
				// suffix: " kWh"
            
			},
            height:300,
            width:500,
            axisY: {
				title: "Volt",
                minimum:80,
                
				// suffix: " kWh"
			},
			data: [{
				type: "splineArea",
                color: "#ad3983", 
				xValueFormatString: "D/M/YYYY",
				yValueFormatString: "#,##0.## bn kW⋅h",
				showInLegend: true,
				legendText: "12/3/2019-13/3/2019",
				dataPoints: [
					{ x: new Date( 2019,1,5,6,0,0 ), y: 100 },
                    { x: new Date( 2019,1,5,7,0,0 ), y: 101 },
                    { x: new Date( 2019,1,5,8,0,0 ), y: 102 },
                    { x: new Date( 2019,1,5,9,0,0 ), y: 103 },
                    { x: new Date( 2019,1,5,10,0,0 ), y: 99 },
					{ x: new Date( 2019,1,5,12,0,0 ), y: 95},
                    { x: new Date( 2019,1,5,13,0,0 ), y: 94},
                    { x: new Date( 2019,1,5,14,0,0 ), y: 90},
                    { x: new Date( 2019,1,5,16,0,0 ), y: 105},
                    { x: new Date( 2019,1,5,17,0,0 ), y:103},
					{ x: new Date( 2019,1,5,18,0,0 ), y: 104},
                    { x: new Date( 2019,1,5,19,0,0 ), y: 102},
                    { x: new Date( 2019,1,5,20,0,0 ), y: 106},
                    { x: new Date( 2019,1,5,21,0,0 ), y: 96},
                    { x: new Date( 2019,1,5,22,0,0 ), y: 97},
                    { x: new Date( 2019,1,5,23,0,0 ), y: 98},
                    { x: new Date( 2019,1,5,24,0,0 ), y: 96},
                    { x: new Date( 2019,1,6,0,0,0 ), y:98},
                    { x: new Date( 2019,1,6,1,0,0 ), y: 100},
                    { x: new Date( 2019,1,6,2,0,0 ), y: 101},
                    { x: new Date( 2019,1,6,3,0,0 ), y: 103},
					{ x: new Date( 2019,1,6,4,0,0 ), y: 104},
					{ x: new Date( 2019,1,6,6,0,0 ), y: 105 },
                    { x: new Date( 2019,1,6,7,0,0 ), y: 101},
                    { x: new Date( 2019,1,6,8,0,0 ), y: 99},
                    { x: new Date( 2019,1,6,9,0,0 ), y: 101},
                    { x: new Date( 2019,1,6,10,0,0 ), y: 98},
					{ x: new Date( 2019,1,6,12,0 ,0),  y: 100},
                    { x: new Date( 2019,1,6,13,0,0 ), y:101},
                    { x: new Date( 2019,1,6,14,0,0 ), y: 102},
                    { x: new Date( 2019,1,6,16,0,0 ), y: 103},
                    { x: new Date( 2019,1,6,17,0,0 ), y: 104 },
					{ x: new Date( 2019,1,6,18,0,0 ), y: 105},
					
				]
			}]
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