import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Dashboard from './../Dashboard';
import IssuesIndex from './../Issues';
import Profile from './../Profile';
import Signin from './../Signin';

class MainMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            showNav: props.location.pathname !== '/signin',
            year: (new Date()).getFullYear()
        }
    }

    render() {
        return (
            <div id="app" className="app container-fluid">
            <div className="row">
                <div id="top-bar" className="top-bar col-xs-12 bg-inverse d-md-none"></div>
                {
                    this.state.showNav ?
                    <div id="nav" className="col-xs-3 bg-inverse text-white py-5 k-vbox">
                        <p className="h4 mt-5">Project</p>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item" id="dashbaord">
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item" id="issues">
                                <Link to="/issues" className="nav-link">Issues</Link>
                            </li>
                        </ul>
                        <p className="h4 mt-5">Account</p>
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item" id="profile">
                                <Link to="/profile" className="nav-link">My Profile</Link>
                            </li>
                            <li className="nav-item" id="signout">
                                <Link to="/signin" className="nav-link">Sign Out</Link>
                            </li>
                        </ul>
                        <hr className="k-flex" />
                        <div id="copy">
                            <p>Copyright &copy; {this.state.year},<br /><a href="http://www.progress.com">Progress Software Corporation</a> and/or its subsidiaries or affiliates.</p>
                            <p>All Rights Reserved.</p>
                        </div>
                    </div >
                    : null
                }

                <div className="col-xs p-4 py-5"> 
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/issues" component={IssuesIndex}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/signin" component={Signin}/>
                 </div>
            </div>
            </div>
        );
    }
}

export default MainMenu