import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Booking from "../Booking/Booking";
import BookingList from "../BookingList/BookingList";
import AddReview from "../AddReview/AddReview";
import AddService from "../AddService/AddService";
import Sidebar from "../Sidebar/Sidebar";
import ManageBooking from "../ManageBooking/ManageBooking";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageTour from "../ManageTour/ManageTour";
import Services from "../../Home/Services/Services";
import { UserContext } from "../../../App";

const Dashboard = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("https://pure-inlet-21064.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);

  return (
    <section className="bg-light d-flex">
      <Sidebar />

      <div className="flex-grow w-75 my-5 me-2">
        <Switch>
          {!loggedInUser.admin && (
            <React.Fragment>
              <Route path="/dashboard/booking">
                <Services />
              </Route>
              <Route path="/dashboard/booking=:id">
                <Booking />
              </Route>
              <Route path="/dashboard/bookinglist">
                <BookingList />
              </Route>
              <Route path="/dashboard/addreview">
                <AddReview serviceData={serviceData} />
              </Route>
            </React.Fragment>
          )}

          {loggedInUser.admin && (
            <React.Fragment>
              <Route path="/dashboard/addservice">
                <AddService />
              </Route>
              <Route path="/dashboard/managetour">
                <ManageTour />
              </Route>
              <Route path="/dashboard/managebooking">
                <ManageBooking />
              </Route>
              <Route path="/dashboard/makeadmin">
                <MakeAdmin />
              </Route>
            </React.Fragment>
          )}
        </Switch>
      </div>
    </section>
  );
};

export default Dashboard;
