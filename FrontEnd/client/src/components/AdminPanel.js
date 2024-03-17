import React, { Component } from 'react';
import Logo from './Resizelogo.png';
import './style.css';

export default class AdminPanel extends Component {
    render() {
        return (
            <div>
            {/* top navigation bar */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container-fluid">
                {/* <!-- offcanvas trigger --> */}
                <button
                class="navbar-toggler me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                {/* <!-- offcanvas trigger --> */}
                {/* <a class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample"><img src={Logo} alt="siteLogo"/></a> */}
                <a class="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample"><h3>Dashboard</h3></a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topNavBar"
                aria-controls="topNavBar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="topNavBar">
                </div>
            </div>
            </nav>
            {/* <!-- top navigation bar --> */}

            {/* <!-- offcanvas --> */}
            <div class="offcanvas offcanvas-start sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">ADMIN PANEL</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <nav class="navbar-dark">
                <ul class="navbar-nav">
                    <li>
                    <div class="text-muted small fw-bold text-uppercase px-3">CORE</div>
                    </li>
                    <li>
                    <a href="." class="nav-link px-3 active">
                        <span class="me-2">
                        <i class="bi bi-speedometer2"></i>
                        </span>
                        <span>Dashboard</span>
                    </a>
                    </li>
                    <li class="my-2"><hr class="dropdown-divider bg-dark" /></li>
                    <li>
                    <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
                        Operation
                    </div>
                    </li>
                    <li>
                    <div class="d-grid gap-3 col-11 mx-auto">
                        <button type="button" class="button1 btn btn-light">Customer Management</button>
                        <a href="/" style={{textDecoration:'none'}}>
                            <button type="button" class="button1 btn btn-light">Admin Management</button>
                        </a>
                        <button type="button" class="button1 btn btn-light"><a href="/" style={{textDecoration:'none',color:'black'}}>Packages Management</a></button>
                        <button type="button" class="button1 btn btn-light">Reservation Management</button>
                        <button type="button" class="button1 btn btn-light"> Management</button>
                        <button type="button" class="button1 btn btn-light"> Management</button>
                        <button type="button" class="button1 btn btn-light"> Management</button>
                    </div>
                    </li>
                    <li class="my-2"><hr class="dropdown-divider bg-dark"/></li>
                </ul>
                </nav>
            </div>
            </div>
            {/* <!-- offcanvas --> */}
            </div>
        )
    }
}
