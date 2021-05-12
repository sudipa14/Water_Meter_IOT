import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class c extends Component {
	render() {
		const options = {
			title:{
                // text: "U.S Smartphone OS Market Share, Q3 2012",
                fontFamily: "Impact",
                fontWeight: "normal"
              },
              height:300,
              width:500,
              legend:{
                verticalAlign: "bottom",
                horizontalAlign: "center"
              },
              data: [
              {
                //startAngle: 45,
                // color:"blue",
               indexLabelFontSize: 20,
               indexLabelFontFamily: "Garamond",
               indexLabelFontColor: "blue",
               indexLabelLineColor: "darkgrey",
               indexLabelPlacement: "outside",
               type: "doughnut",
               showInLegend: true,
               dataPoints: [
               {  y: 96, legendText:"96", indexLabel: "" },
                {y:4 ,legendText:"4",indexLabel: "4"}
               ]
             }
             ]
            //  chart.render();
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