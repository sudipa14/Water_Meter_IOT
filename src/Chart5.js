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
    
    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				// text: "Units Sold VS Profit"
			},
			subtitles: [{
				// text: "Click Legend to Hide or Unhide Data Series"
			}],
			axisX: {
				title: "Date"
			},
			axisY: {
				title: "Temperature",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD"
			},
			axisY2: {
				title: "Pressure",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0"
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "Temperature",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Units",
				dataPoints: [
					{ x: new Date(2020, 0, 1), y: 80 },
					{ x: new Date(2020, 1, 1), y: 70 },
					{ x: new Date(2020, 2, 1), y: 60 },
					{ x: new Date(2020, 3, 1), y: 83 },
					{ x: new Date(2020, 4, 1), y: 60 },
					{ x: new Date(2020, 5, 1), y: 69 },
					{ x: new Date(2020, 6, 1), y: 73 },
					{ x: new Date(2020, 7, 1), y: 66 },
					{ x: new Date(2020, 8, 1), y: 72 },
					{ x: new Date(2020, 9, 1), y: 73 },
					{ x: new Date(2020, 10, 1), y: 80 },
					{ x: new Date(2020, 11, 1), y: 64 }
				]
			},
			{
				type: "spline",
				name: "Pressure",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.#",
				dataPoints: [
					{ x: new Date(2020, 0, 1), y:50 },
					{ x: new Date(2020, 1, 1), y: 60 },
					{ x: new Date(2020, 2, 1), y: 52 },
					{ x: new Date(2020, 3, 1), y: 57 },
					{ x: new Date(2020, 4, 1), y: 67 },
					{ x: new Date(2020, 5, 1), y: 50 },
					{ x: new Date(2020, 6, 1), y: 59 },
					{ x: new Date(2020, 7, 1), y: 60 },
					{ x: new Date(2020, 8, 1), y: 61 },
					{ x: new Date(2020, 9, 1), y: 67 },
					{ x: new Date(2020, 10, 1), y: 56 },
					{ x: new Date(2020, 11, 1), y: 58 }
				]
			}]
		}
		
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
    
}

export default can;
