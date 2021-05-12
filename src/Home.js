import React, { Component } from "react";
import Chart from './Chart.js';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import map from './map.jpg';
import map2 from './map2.PNG';
import './Home.css'
const options_zip = [
    {
        label: "1100",
        value: "1100",
    },
    {
        label: "1200",
        value: "1200",
    },
    {
        label: "1302",
        value: "1302",
    },
    {
        label: "1204",
        value: "1204",
    },
    {
        label: "1235",
        value: "1235",
    },

];
const meter = [
    {
        label: "Commercial",
        value: "Commercial",
    },
    {
        label: "Industrial",
        value: "Industrial",
    },
    {
        label: "Residential",
        value: "Residential",
    },

];

const consumption = [

    {
        label: "Current",
        value: 1,
    },
    {
        label: "Cumulative",
        value: 2,
    },
    {
        label: "Average",
        value: 3,
    },
    {
        label: "Annualasied",
        value: 4,
    },



]
class s extends Component {
    constructor(props) {

        super(props);
        this.state = {
            area: "Banani",
            meter: "Residential",
            startDate: new Date(),
            date: "2016-05-15",
            c: 1

        };

        this.handleChange_area = this.handleChange_area.bind(this);
        this.handleChange_meter = this.handleChange_meter.bind(this);
        this.handleChange_date_from = this.handleChange_date_from.bind(this);
        this.handleChange_c = this.handleChange_c.bind(this);
    }
    handleChange_area(e) {
        console.log("Fruit Selected!!");
        this.setState({ area: e.target.value });
    }
    handleChange_meter(e) {
        console.log("Fruit Selected!!");
        this.setState({ meter: e.target.value });
    }
    handleChange_date_from(e) {
        console.log("Fruit Selected!!");
        this.setState({ startDate: e.target.value });
    };
    handleChange_c(e) {
        console.log("Fruit Selected!!");
        this.setState({ c: e.target.value });
    };
    render() {
        return (
            <div className="home" >
                {/* <!-- heading row --> */}

                <div className="all">

                    <div className="row row_first">
                        <div className="col-md-3 select-container">
                            
                            <label id="zip">Zip Code :</label>
                            <select value={this.state.area} onChange={this.handleChange_area}>
                                {options_zip.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>



                        </div>

                        <div className="col-md-3">
                            <span id="meter">Meter Type : </span>
                            <select value={this.state.meter} onChange={this.handleChange_meter}>
                                {meter.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">


                            <span style={{}}>From : </span>


                            <input type="date" id="birthday" name="birthday" />


                        </div>
                        <div className="col-md-3">


                            <span style={{}}>To : </span>


                            <input type="date" id="birthday" name="birthday" />


                        </div>






                    </div>
                    <div className="row row_second">
                        <div className="col-md-5">
                            <h5 style={{ paddingLeft:100 }} >Water Distribution Area map</h5>
                            <hr></hr>
                            <img src={map2} className="map"></img>
                        </div>

                        <div className="col-md-5" >

                            <h5 style={{ textAlign: 'center' }}>Flow vs Time</h5>
                            <hr></hr>
                            <Chart />
                        </div>
                        <div className="col-md-2" >
                            <h5 style={{ textAlign: 'center' }}>Flowrate</h5>
                            <hr></hr>
                            <div className="card styled_card" >
                                {/* <div className="card styled_card col-md-4" >

                                            <div className="card-body">
                                                <p className="card-text" style={{ color: 'black', fontSize: 40, textAlign: 'center' }}>51.73</p>
                                                <p className="last_text card-text">Average past 30 minutes</p>
                                            </div>
                                        </div> */}
                                <div className="card-body">
                                    <p className="card-text" style={{ color: 'black', fontSize: 40, textAlign: 'center' }}>51.73</p>
                                    <p className="last_text card-text">Average past 30 minutes</p>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="row row_second">
                        <div className="col-md-5" >
                            <h5 style={{ textAlign: 'center' }}>Valve Pressure</h5>
                            <hr></hr>
                            <Chart2 />
                        </div>
                        <div className="col-md-5" >
                            <h5 style={{ textAlign: 'center' }}>Consumption Statistics</h5>
                            <hr></hr>
                            <Chart3 name={this.state.c} />

                        </div>
                        <div className="col-md-1" >
                            <h5 style={{ textAlign: 'center' }}>Options</h5>
                            {/* <select value={this.state.consumpt}  >
                                        {consumption.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select> */}
                            <select value={this.state.c} onChange={this.handleChange_c}>
                                {consumption.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>

                        </div>




                    </div>
                </div>


            </div>
        )
    }
}
export default s;