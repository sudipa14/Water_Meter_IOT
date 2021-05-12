import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import "./Navigation.css";

class NavigationBar extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <>
                <Navbar className="navbar-expand-lg fixed-top" light>
                    <NavbarBrand href="/">
                        <div className="logo">
                            Water Meter IOT
                        </div>
                        
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-links" to="/">
                                    Flowrate Analytics
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/Comparative Analytics">
                                    Comaparative Analysis
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/Consumption Analysis">
                                    Consumption Analysis
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/Meter Condition">
                                    Meter Condition
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/Water Quality">
                                    Water Quality
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/Leakage Control">
                                    Leakage Control
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    
                </Navbar>
            </>
        );
    }
}

export default NavigationBar;

// https://6-4-0--reactstrap.netlify.app/components/navbar/
// https://reactjs.org/docs/fragments.html
