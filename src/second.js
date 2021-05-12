import React, { Component } from "react";

import map3 from './map3.PNG';
import './Home.css'
import Chart4 from './Chart4'
import Chart5 from './Chart5'



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
                    <div className="row row_second">
                        <div className="col-md-5">
                            <h5 style={{paddingLeft:150}} >Map View</h5>
                            <img src={map3} className="map"></img>
                        </div>

                        <div className="col-md-5" >

                            <h5 style={{ textAlign: 'center' }} >Consumption Trend</h5>
                            <Chart4 />
                        </div>
                        <div className="col-md-2" >
                            <h5 style={{ textAlign: 'center' }}>Total Consumption (Gallons)</h5>
                            <div className="card styled_card" >
                                {/* <div className="card styled_card col-md-4" >

                                            <div className="card-body">
                                                <p className="card-text" style={{ color: 'black', fontSize: 40, textAlign: 'center' }}>51.73</p>
                                                <p className="last_text card-text">Average past 30 minutes</p>
                                            </div>
                                        </div> */}
                                <div className="card-body">
                                    <p className="card-text" style={{ color: 'black', fontSize: 25, textAlign: 'center', paddingTop: 10 }}>8062.33M</p>
                                    {/* <p className="last_text card-text">8062.22M</p> */}
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="row row_second">
                        <div className="col-md-5" >
                            <h5 style={{ textAlign: 'center' }}>Environmental Condition</h5>
                            <Chart5 />
                        </div>
                        <div className="col-md-6" >
                            <h5 style={{textAlign:"center"}}>Consumption Statistics :</h5>
                            <div className="container" style={{backgroundColor:"darkblue"}}>
                                <div className="row"style={{ color:"white"}}>
                                    <div className="col-md-2">
                                        Date
                                    </div>
                                    <div className="col-md-2">
                                        Meter_Id
                                    </div>
                                    <div className="col-md-3">
                                        Consumption
                                     </div>
                                     <div className="col-md-3">
                                        Meter type
                                     </div>
                                     <div className="col-md-2">
                                        Region code
                                     </div>
                                </div>
                                
                            </div>
                            <div className="container" style={{backgroundColor:"white"}}>
                            <div className="row">
                                    <div className="col-md-2">
                                       1/4/21
                                    </div>
                                    <div className="col-md-2">
                                        1111222
                                    </div>
                                    <div className="col-md-3">
                                        80
                                     </div>
                                     <div className="col-md-3">
                                        Industrial
                                     </div>
                                     <div className="col-md-2">
                                        222
                                     </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-md-2">
                                       3/4/21
                                    </div>
                                    <div className="col-md-2">
                                        223344
                                    </div>
                                    <div className="col-md-3">
                                        90
                                     </div>
                                     <div className="col-md-3">
                                        Industrial
                                     </div>
                                     <div className="col-md-2">
                                        221
                                     </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-md-2">
                                       5/4/21
                                    </div>
                                    <div className="col-md-2">
                                        223344
                                    </div>
                                    <div className="col-md-3">
                                        96
                                     </div>
                                     <div className="col-md-3">
                                        Residential
                                     </div>
                                     <div className="col-md-2">
                                        220
                                     </div>
                                </div>
                                <hr></hr>
                            </div>

                        </div>





                    </div>
                </div>


            </div>
        )
    }
}
export default s;