import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const ManageBooking = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");

  const handleStatusChange = (event) => {
    event.preventDefault();
    setUpdateStatus(event.target.value);
    setBookingId(event.target.id);

    fetch("https://pure-inlet-21064.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
      });
  };

  useEffect(() => {
    axios.put(`https://pure-inlet-21064.herokuapp.com/bookings/${bookingId}`, {
      status: updateStatus,
    });
  }, [bookingId, updateStatus]);

  useEffect(() => {
    fetch("https://pure-inlet-21064.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
      });
  }, [allBookings]);

  return (
    <section className="ms-3">
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Booking Placed for</th>
            <th>Event Details</th>
            <th>Booking Details</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((booking) => (
            <tr key={booking._id}>
              <td>
                <p>{booking.name}</p>
                <p>Email: {booking.email}</p>
                <p>Phone: {booking.phone}</p>
              </td>
              <td>
                <p className="fw-bold">{booking.title}</p>
                <p>{booking.place}</p>
                <p>Type: {booking.type}</p>
              </td>
              <td>
                <p>For {booking.tickets} Persons</p>
                <p>{booking.duration} Days</p>
                <p>${booking.price}/person</p>
                <p>Departure: {booking.departure}</p>
              </td>
              <td>
                <select
                  value={booking.status}
                  id={booking._id}
                  onChange={handleStatusChange}
                  className="form-select"
                >
                  <option value="Pending">Pending</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Done">Done</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <p className="mt-3">Current Status: {booking.status}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default ManageBooking;
