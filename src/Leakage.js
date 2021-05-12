import React, { Component } from "react";
import Chart14 from './Chart14';
import Chart144 from './Chart144'
import './Home.css'
import Chartloss from './Chartloss'

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
            area: "All",
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

                    </div>
                    <div className="row row-first" style={{ paddingTop: 30 }}>
                        <div className="col-md-6">
                            <h5 style={{ textAlign: "center" }}>Leakage Detected</h5>
                            <hr></hr>
                            <div className="container" style={{ backgroundColor: "darkblue" }}>
                                <div className="row" style={{ color: "white" }}>
                                    <div className="col-md-2">
                                        Zip Code
                                    </div>
                                    <div className="col-md-2">
                                        Meter_Id
                                    </div>
                                    <div className="col-md-2">
                                        Severity
                                     </div>
                                    <div className="col-md-2">
                                        Leak Cost
                                     </div>
                                    <div className="col-md-2">
                                        Action
                                     </div>
                                    <div className="col-md-2">
                                        Valve Condition
                                     </div>
                                </div>

                            </div>

                            <div className="container" style={{ backgroundColor: "white" }}>
                                <div className="row">
                                    <div className="col-md-2">
                                        1000
                                    </div>
                                    <div className="col-md-2">
                                        1122
                                    </div>
                                    <div className="col-md-2">
                                        Drip
                                     </div>
                                    <div className="col-md-2">
                                        500
                                     </div>
                                    <div className="col-md-2">
                                        Dispatch
                                     </div>
                                    <div className="col-md-2">
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
                                    <div className="col-md-2">
                                        1100
                                    </div>
                                    <div className="col-md-2">
                                        423
                                    </div>
                                    <div className="col-md-2">
                                        Break
                                     </div>
                                    <div className="col-md-2">
                                        1000
                                     </div>
                                    <div className="col-md-2">
                                        Dispatch
                                     </div>
                                    <div className="col-md-2">
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
                                    <div className="col-md-2">
                                        1200
                                    </div>
                                    <div className="col-md-2">
                                        554
                                    </div>
                                    <div className="col-md-2">
                                        Drip
                                     </div>
                                    <div className="col-md-2">
                                        375
                                     </div>
                                    <div className="col-md-2">
                                        Dispatch
                                     </div>
                                    <div className="col-md-2">
                                        <label id="zip">Select</label>
                                        <select value={this.state.select_value} onChange={this.handleChange_select_value}>
                                            {select_val.map((option) => (
                                                <option value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <h5 style={{ textAlign: "center" }}>Water Loss</h5>
                            <hr></hr>
                            <div className="row" style={{marginLeft:5}}>
                               
                                <Chartloss/>

                            </div>



                        </div>

                    </div>
                    <div style={{ paddingLeft: 350, paddingTop: 30 }}>
                        <h4 >Total water loss for this duration is 60.77%</h4>
                    </div>
                    <div className="row" style={{ paddingLeft: 10, paddingTop: 30 }}>

                        <br></br>
                        <div className="col">
                        <Chart14 />
                        </div>
                        <div className="col">
                        <Chart144 />
                        </div>

                    </div>






                </div>


            </div>
        )
    }
}
export default s;