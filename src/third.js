import React, { Component } from "react";

import map from './map.jpg';
import './Home.css'
import Chart66 from './Chart66'
import Chart6 from './Chart6';
import Chart7 from './Chart7';
import area_map from './Area_based_map.jpg'
import Chart77 from './Chart77'
import map4 from './map4.PNG'
import area_map2 from './area_map2.jpg'


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
class s extends Component {
    constructor(props) {

        super(props);
        this.state = {
            area: "1100",
            meter: "All",
            startDate: new Date(),
            date: "2016-05-15",
            c: 1,
            value: '',
            value2: '',
            from: '9/5/2021',
            value_3: ''

        };


        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange_3 = this.handleChange_3.bind(this);

        this.handleChange_meter = this.handleChange_meter.bind(this);
        this.handleChange_area = this.handleChange_area.bind(this);

    }
    handleChange_area(e) {
        console.log("Fruit Selected!!");
        this.setState({ area: e.target.value });
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }
    handleChange_3(event) {
        this.setState({ value_3: event.target.value });
    }
    handleChange_meter(e) {
        console.log("Fruit Selected!!");
        this.setState({ meter: e.target.value });
    }


    render() {
        return (
            <div className="home" >
                {/* <!-- heading row --> */}

                <div className="all">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 style={{ paddingTop: 10, paddingBottom: 10 }}>Consumer Based Comparison</h5>

                            <div className="row" >
                                <form >
                                    <label style={{ marginRight: 10 }}>
                                        Meter ID1:  </label>
                                <input style={{marginLeft:5}}type="text" value={this.state.value} onChange={this.handleChange} />
                                   

                                </form>
                            </div>
                            <div className="row" >
                                
                                    <label style={{ }}></label>
                                        Meter ID2:
                                   
                                <input style={{marginLeft:14}} type="text" value={this.state.value2} onChange={this.handleChange2} />
                                    

                                
                            </div>
                            <div className="row" style={{ marginTop: 20 }}>

                                {this.state.value !== '' && this.state.value2 !== ''
                                    ? (
                                        <Chart6 />
                                    )
                                    : <Chart66/>
                                }




                            </div>
                            <div className="row">
                                <h5 style={{ paddingTop: 10, paddingBottom: 10 }}>Area Based Comparison</h5>
                            </div>
                            <div className="row">
                            <div className="col-md-5">
                                <label id="zip">Zip Code :</label>
                                <select value={this.state.area} onChange={this.handleChange_area}>
                                    {options_zip.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                </div>
                                <div className="col-md-5">
                                    <span id="meter">Meter Type : </span>
                                    <select value={this.state.meter} onChange={this.handleChange_meter}>
                                        {meter.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: 20 }}>
                                {
                                    this.state.area!=="1100"
                                    ? (
                                        <img src={area_map} className="map"></img>
                                    )
                                    : <img src={area_map2} className="map"></img>
                                }
                                




                            </div>

                        </div>
                        <div className="col-md-5">
                            <h5 style={{ paddingTop: 10, paddingBottom: 10 }}>Time Based Comparison</h5>
                            <div className="row">


                                <span style={{}}>From : </span>


                                <input type="date" style={{ marginRight: 10,marginLeft:30 }} />

                                <span style={{}}>To : </span>


                                <input type="date" style={{ marginRight: 10,marginLeft:10 }} />



                            </div>
                            <div className="row " style={{ marginTop: 10 }}>
                                <form >
                                    <label style={{ marginRight: 10 }}>
                                        Meter ID:
                                <input style={{marginLeft:5}}type="text" value={this.state.value_3} onChange={this.handleChange_3} />
                                    </label>

                                </form>

                            </div>
                            <div className="row">
                                {this.state.value_3 !== ''
                                    ? (
                                        <Chart7 />
                                    )
                                    : <Chart77/>
                                }




                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default s;