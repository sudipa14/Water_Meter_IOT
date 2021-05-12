import React, { Component } from "react";

import map from './map.jpg';
import './Home.css'

import Chart6 from './Chart6';
import Chart7 from './Chart7'
import Chart8 from './chart8'

import Chart9 from './Chart9'
import Chart10 from './Chart10'
import Chart11 from './Chart11'
import Chart12 from './Chart12'
import Chart13 from './Chart13'
class s extends Component {
    constructor(props) {

        super(props);
        this.state = {
            area: "All",
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


    render() {
        return (
            <div className="home" >
                {/* <!-- heading row --> */}

                <div className="all">
                    <h4 style={{paddingTop:20,textAlign:"center"}}>Water Quality</h4>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                        <h5 style={{paddingTop:20}}>Water PH</h5>
                        <Chart8/>
                        </div>
                        <div className="col-md-6">
                        <h5 style={{paddingTop:20}}>Oxygen Reduction Potential</h5>
                        <Chart9/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <h5 style={{paddingTop:20}}>Dissolved Oxygen Percentage</h5>
                        <Chart10/>
                        </div>
                        <div className="col-md-6">
                        <h5 style={{paddingTop:20}}>Conductivity</h5>
                        <Chart11/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <h5 style={{paddingTop:20}}>Water Temperature</h5>
                        <Chart12/>
                        </div>
                        <div className="col-md-6">
                        <h5 style={{paddingTop:20}}>State of Charge</h5>
                        <Chart13/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default s;