import React, { Component } from 'react';

class Leftbar extends Component {
    render() {
        return (
            <>

                <div
                    className="d-flex flex-column flex-shrink-0 static-bar-left align-items-center"
                >
                    <span className="sidebar-menu selected mt-5"> </span>
                    <span className="sidebar-menu"> </span>
                    <span className="sidebar-menu"> </span>
                    <span className="sidebar-menu"> </span>
                    <span className="sidebar-menu"> </span>
                </div>

                <div id="collapsibleSidebar" className="collapse">
                    <h3 className="sideNavHeading">Dashboard</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Sales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Supply Chain</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Leftbar;