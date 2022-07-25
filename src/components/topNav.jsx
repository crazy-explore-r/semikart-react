import React, { Component } from 'react';
import logo from '../images/logo.svg';
import userProfile from '../images/user.png';

class Topnav extends Component {
    render() {
        return (
            <>

                <nav className="top-navbar navbar navbar-light navbar-expand-md justify-content-center p-0 fixed-top"
                    style={{height: "60px", backgroundColor: "#fff"}}>

                    <div className="navbar-collapse w-100 order-1 order-md-0">

                        <button id="sidebarButton" className="sidebar-btn" type="button">
                            <i className="fa-solid fa-bars sidebar-menu-icon"></i>
                        </button>

                        <a className="align-self-center" href="#">
                            <img src={logo} alt="logo" style={{width:"191px"}}></img>
                        </a>

                    </div>

                    <div className="mx-auto navbar-collapse collapse w-100 justify-content-center h-100">
                        <ul className="navbar-nav" style={{lineHeight: "60px"}}>
                            <li className="nav-item active mr-4">
                                <a className="nav-link p-0" href="#">Sales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0" href="#">Supply Chain</a>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-collapse collapse w-100 order-3 mr-4">

                        <button className="btn btn-default btn-lg btn-link text-body ml-auto" style={{fontSize: "21px"}}>
                            <i className="fa-regular fa-bell"></i>
                        </button>
                        <span className="badge badge-notify rounded-circle"> </span>


                        <a href="#">
                            <img className="rounded-circle userProfile" src={userProfile} alt="UserProfile"></img>
                        </a>

                    </div>

                </nav>
            </>
        );
    }
}

export default Topnav;