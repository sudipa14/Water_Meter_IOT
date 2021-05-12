import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav_bar from "./Navigation";
import Home from './Home.js';
import consump from './second';
import compare from './third';
import quality_water from './fourth'
import meter from './fifth'
import leak from'./Leakage'
class App extends Component {

  render() {
    return (


      <BrowserRouter>
        <div>
          <Nav_bar />


          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Consumption Analysis" component={consump} />
            <Route path="/Comparative Analytics" component={compare} />
            <Route path="/Water Quality" component={quality_water} />
            <Route path="/Meter Condition" component={meter} />
            <Route path="/Leakage Control" component={leak} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
//npm run nodemon
//npm run start