import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/SignForm/Login/Login";
import PrivateRoute from "./Pages/SignForm/PrivateRoute/PrivateRoute";
import Registration from "./Pages/SignForm/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Purchase from "./Pages/Purchase/Purchase";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/SignForm/AdminRoute/AdminRoute";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import Payment from "./Pages/Dashboard/Payment/Payment";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/register"
              element={<Registration></Registration>}
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard"
                element={<DashboardHome></DashboardHome>}
              ></Route>
              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addProduct`}
                element={
                  <AdminRoute>
                    <AddProduct></AddProduct>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageOrder`}
                element={
                  <AdminRoute>
                    <ManageOrder></ManageOrder>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/manageProduct`}
                element={
                  <AdminRoute>
                    <ManageProduct></ManageProduct>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/payment`}
                element={
                  <PrivateRoute>
                    <Payment></Payment>
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/myOrder`}
                element={
                  <PrivateRoute>
                    <MyOrder></MyOrder>
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/review`}
                element={
                  <PrivateRoute>
                    <Review></Review>
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="/explore" element={<Explore></Explore>}></Route>
            <aRoute
              path="/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase></Purchase>
                </PrivateRoute>
              }
            ></aRoute>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
