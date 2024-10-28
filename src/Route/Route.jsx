import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../Root/Root";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Appointment from "../components/Appointment/Appoinment";
import Dashboard from "../components/Dashboard/Dashboard";
import AddDoctor from "../components/Dashboard/AddDoctor/AddDoctor";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddReview from "../components/Dashboard/AddReview/AddReview";
import ManageDoctor from "../components/Dashboard/ManageDoctor/ManageDoctor";
import NewAppointment from "../components/Dashboard/NewAppointment/NewAppointment";
import About from "../components/About/About";
import Review from "../components/Home/Review/Review";
import AllUser from "../components/Dashboard/AllUser/AllUser";
import AdminRoute from "../PrivateRoute/AdminRoute";
import Contact from "../components/Home/Contact/Contact";
import Payment from "../components/Dashboard/Payment/Payment";
import UserRequest from "../components/Dashboard/UserRequest/UserRequest";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path: "/reviews",
        element: <Review></Review>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <PrivateRoute><Appointment></Appointment></PrivateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "doctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "manageDoctor",
        element: (
          <AdminRoute>
            <ManageDoctor></ManageDoctor>
          </AdminRoute>
        ),
      },
      {
        path: 'payment',
        element:<Payment></Payment>
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path:'request',
        element: <UserRequest></UserRequest>
      },
      {
        path: "review",
        element: <AddReview></AddReview>,
      },
      {
        path: "appointment",
        element: <NewAppointment></NewAppointment>,
      },
    ],
  },
]);

export default Router;
