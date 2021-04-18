import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../App";

const BookingList = ({ bookingStatus }) => {
  const [bookingsFromUser, setBookingsFromUser] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    const email = {
      email: loggedInUser.email,
    };
    fetch("https://pure-inlet-21064.herokuapp.com/bookingsFromUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookingsFromUser(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err.message);
        }
      });
  }, [loggedInUser.email, bookingStatus]);

  return (
    <section
      style={{ maxWidth: "1000rem" }}
      className="border-0 bg-transparent"
    >
      <div className="row d-flex justify-content-center">
        {bookingsFromUser.map((booking) => (
          <div
            key={booking._id}
            style={{ width: "25rem" }}
            className="card m-2 col-md-4"
          >
            <div className="card-body">
              <div>
                <small>{booking.type}</small>
                <p>Status: {booking.status}</p>
              </div>

              <div>
                <h5 className="card-title fw-bold">{booking.title}</h5>
                <p>Departure Date: {booking.departure}</p>
                <p>Paid: ${booking.price}</p>
                <p>{booking.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingList;
