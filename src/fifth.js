import React, { Component } from "react";
import Chart from './Chart.js';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import map from './map.jpg';
import './Home.css'
import Chart4 from './Chart4'
import Chart5 from './Chart5'
import ReactTable from "react-table";
import off from './switch-off-icon.png';
import on from './switch-on-icon.png';
import set from './set.png';
import book from './book.png';

const select_val = [
    {
        label: "ON",
        value: "ON"
    },
    {
        label: "OFF",
        value: "OFF"
    }
]
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
    {
        label: "All",
        value: "All",
    },



];
const consumption = [

    {
        label: "Commercial",
        value: 1,
    },
    {
        label: "Industrial",
        value: 2,
    },
    {
        label: "Residential",
        value: 3,
    },
    {
        label: "Annual",
        value: 4,
    },



]
class s extends Component {
    constructor(props) {

        super(props);
        this.state = {
            area: "1100",
            meter: "All",
            startDate: new Date(),
            date: "2016-05-15",
            c: 1,
            select_value: "ON",
            select_value2: "ON",
            select_value3: "ON"

        };

        this.handleChange_area = this.handleChange_area.bind(this);
        this.handleChange_meter = this.handleChange_meter.bind(this);
        this.handleChange_date_from = this.handleChange_date_from.bind(this);
        this.handleChange_c = this.handleChange_c.bind(this);
        this.handleChange_select_value = this.handleChange_select_value.bind(this);
        this.handleChange_select_value2 = this.handleChange_select_value2.bind(this);
        this.handleChange_select_value3 = this.handleChange_select_value3.bind(this);
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
    handleChange_select_value(e) {
        console.log("Fruit Selected!!");
        this.setState({ select_value: e.target.value });
    };
    handleChange_select_value2(e) {
        console.log("Fruit Selected!!");
        this.setState({ select_value2: e.target.value });
    };
    handleChange_select_value3(e) {
        console.log("Fruit Selected!!");
        this.setState({ select_value3: e.target.value });
    };
    render() {
        return (
            <div className="home" >
                {/* <!-- heading row --> */}

                <div className="all">

                    <div className="row row_first">
                        <div className="col-md-3 select-container">
                            {/* <label id="zip">Zip Code :</label>
                                    <button className="btn btn-secondary  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                        All
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Dhaka</a></li>
                                        <li><a className="dropdown-item" href="#">Khulna</a></li>
                                        <li><a className="dropdown-item" href="#">Barishal</a></li>
                                        <li><a className="dropdown-item" href="#">Sylhet</a></li>
                                        <li><a className="dropdown-item" href="#">Chittagong</a></li>
                                        <li><a className="dropdown-item" href="#">Rajshahi</a></li>
                                    </ul> */}
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

                        <div className="row " style={{ paddingTop: 50}}>



                            <div className="col-md-4">
                                <div className="container" style={{ backgroundColor: "darkblue" }}>
                                    <div className="row" style={{ color: "white" }}>
                                        <div className="col-md-4">
                                            Meter ID
                                    </div>
                                        <div className="col-md-4">
                                            Volume Consumption
                                    </div>
                                        <div className="col-md-4">
                                            Valve Condition
                                     </div>

                                    </div>
                                </div>
                                <div className="container" style={{ backgroundColor: "white" }}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            1234
                                    </div>
                                        <div className="col-md-4">
                                            30G
                                    </div>
                                        <div className="col-md-4">
                                            <label id="zip">Select</label>
                                            <select value={this.state.select_value} onChange={this.handleChange_select_value}>
                                                {select_val.map((option) => (
                                                    <option value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-md-4">
                                            12233
                                    </div>
                                        <div className="col-md-4">
                                            20G
                                    </div>
                                        <div className="col-md-4">
                                            <label id="zip">Select</label>
                                            <select value={this.state.select_value2} onChange={this.handleChange_select_value2}>
                                                {select_val.map((option) => (
                                                    <option value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-md-4">
                                            334
                                    </div>
                                        <div className="col-md-4">
                                            15G
                                    </div>
                                        <div className="col-md-4">
                                            <label id="zip">Select</label>
                                            <select value={this.state.select_value3} onChange={this.handleChange_select_value3}>
                                                {select_val.map((option) => (
                                                    <option value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                            
                            <div className="col-md-3" style={{ marginLeft: 270}}>

                            
                                
                                
                                    <div className="card-body styled_card2" style={{marginTop:100}}>
                                        <h5>Valve Operational Info</h5>

                                        <li>Valve Number  :  1234</li>
                                        <li>Actuator State  :  1</li>
                                        <li>Actuator position  :  1</li>
                                    </div>
                                


                            </div>
                            <div className="col-md-1" >


                            

                                    <div className="card-body styled_card2"style={{marginTop:100}}>
                                        <h5>Flow Chart Thresholds</h5>

                                        <li>Maxflow Thresholds  :  150</li>
                                        <li>Reverse Thresold  :  -50</li>

                                    </div>
                                


                            </div>

                        </div>
                        <div className="row" style={{
                            marginTop: 20, marginLeft
                                : 5
                        }} >
                            {/* <div className="col-md-2" style={{ marginLeft: 700, marginTop: 30 }}> */}
                            <div className="card styled" >
                                <img className="card-img-top off" src={on} alt="Card image cap" />
                                <div className="card-body">
                                    <h6>Open Valve</h6>

                                    <p >Remotely open valve with device control</p>

                                </div>

                            </div>

                            <div className="card styled" >
                                <img className="card-img-top off" src={off} alt="Card image cap" />
                                <div className="card-body">
                                    <h6>Close Valve</h6>

                                    <p >Remotely close valve with device control</p>

                                </div>
                            </div>


                            <div className="card styled" >
                                <img className="card-img-top off" src={set} alt="Card image cap" />
                                <div className="card-body">
                                    <h6>Set valve position</h6>

                                    <p >Remotely set valve position to control water flow</p>

                                </div>
                            </div>
                            <div style={{ marginLeft: 90}}>

                                <div className="card-body styled_card2">
                                    <h5>Maintenance Info</h5>

                                    <li>Battery Life :  1</li>
                                    <li>Installation  :  2/9/20</li>
                                    <li>Manufacture  :  Intel</li>
                                    <li>Maintenaned  :  True</li>
                                    <li>Last Maintenance  :  5/9/20</li>

                                </div>
                            </div>
                            {/* </div> */}

                            <div className="col-md-1" style={{marginLeft:50}} >
                                
                                <div className="card-body styled_card2">
                                    
                                    <img className="card-img-top off" src={set} alt="Card image cap" />
                                    <h6>Reset Alert Thresholds</h6>
                                    <p >Remotely flow alert thresolds to default values</p>

                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-1" style={{ marginLeft: 900, marginTop: 20 }}>
                                <div className="card styled_card2" >
                                    <img className="card-img-top off" src={book} alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 style={{ textAlign: "center" }}>Documentation</h6>
                                        <p style={{ textAlign: "center" }}>To know more,please go through the Documentation</p>


                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>








                </div>


            </div>
        )
    }
}
export default s;