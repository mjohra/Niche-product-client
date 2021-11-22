import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  
  const { admin, user, logOut } = useAuth();
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap dashboard">
        <div className="col-auto col-md-4 col-lg-2 px-sm-2 px-0 dashboard-back">
          <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
            <h1 className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="dashboard-header1 d-none d-sm-inline py-3">
                Dashboard
              </span>
            </h1>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start dashboard"
              id="menu"
            >
              <li className="p-0 m-0">
                <Link
                  className="nav-link align-center px-0"
                  style={{ textDecoration: "none" }}
                  to='/dashboard'
                >
                  <i className="d_icon fas fa-th-list me-3 "></i>
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="p-0 m-0">
                <Link
                  className="nav-link align-center px-0"
                  style={{ textDecoration: "none" }}
                  to="/home"
                >
                  <i class="d_icon fas fa-home me-3 "></i>
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              {admin && (
                <div className="m-0 p-0">
                  <li className="m-0 p-0">
                    <Link
                      className="nav-link px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/addProduct`}
                    >
                      <i className="d_icon fas fa-tags me-3"></i>
                      <span className="ms-md-1 d-none d-sm-inline">
                        Add Product
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-link align-center px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/makeAdmin`}
                    >
                      <i className="d_icon fas fa-users-cog me-3"></i>
                      <span className="d-none d-sm-inline">Make Admin</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-link align-center px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/manageProduct`}
                    >
                      <i className="d_icon ms-1 fas fa-receipt me-3"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Manage Product
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-link align-center px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/manageOrder`}
                    >
                      <i className="d_icon fas fa-cash-register me-3"></i>
                      <span className="ms-1 d-none d-sm-inline">
                        Manage All Order
                      </span>
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    {user?.email && (
                      <Button className=" fw-bold btn-dash" onClick={logOut}>
                        <i class="fas fa-sign-out-alt me-3"></i>
                        <span className="ms-1 d-none d-sm-inline">Logout</span>
                      </Button>
                    )}
                  </li>
                </div>
              )}

              {!admin && (
                <div className="p-0 m-0">
                  <li className="p-0 m-0">
                    <Link
                      className="nav-link align-center px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/payment`}
                    >
                      <i className="d_icon far fa-credit-card me-3 "></i>
                      <span className="ms-1 d-none d-sm-inline">Payment</span>
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      className="nav-link align-center px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/myOrder`}
                    >
                      <i className="d_icon fas fa-shopping-cart me-3"></i>
                      <span className="ms-1 d-none d-sm-inline">My Order</span>
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link
                      className="nav-link align-center px-0"
                      style={{ textDecoration: "none" }}
                      to={`/dashboard/review`}
                    >
                      <i className="d_icon fas fa-comment-dots me-3"></i>
                      <span className="ms-1 d-none d-sm-inline">Review</span>
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                  {user?.email && (
                      <Button className=" fw-bold btn-dash" onClick={logOut}>
                        <i class="fas fa-sign-out-alt me-3"></i>
                        <span className="ms-1 d-none d-sm-inline">Logout</span>
                      </Button>
                    )}
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
        <div className="col">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
