import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loggedInUser] = useContext(UserContext);
  const [bookedTour, setBookedTour] = useState([]);
  const [bookingFormData, setBookingFormData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookedTour(data);
      });
  }, [id]);

  const onSubmit = (data) => {
    setBookingFormData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const bookingData = {
      ...bookingFormData,
      ...bookedTour,
      paymentId,
      orderedFrom: loggedInUser.email,
      status: "Pending",
      orderDate: new Date().toDateString(),
    };

    delete bookingData._id;
    delete bookingData.date;

    fetch(`http://localhost:5000/placeBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => {
        alert("Booking Placed Successfully");
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
        }
      });
  };

  return (
    <section className="row ms-3">
      <div
        style={{ display: bookingFormData ? "none" : "block" }}
        className="col-md-6"
      >
        <h2>Place Booking</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="my-2">
            <Form.Label>
              Your Name:{" "}
              {errors.name && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Your Email:{" "}
              {errors.email && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              placeholder="Your email"
              {...register("email", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Phone:{" "}
              {errors.phone && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Tickets:{" "}
              {errors.tickets && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="How many tickets?"
              {...register("tickets", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Departure:{" "}
              {errors.departure && (
                <span className="text-danger">Required</span>
              )}
            </Form.Label>
            <Form.Control
              type="date"
              {...register("departure", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>Additional Information (Optional): </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your Message"
              {...register("message")}
            />
          </Form.Group>
          <Button type="submit" variant="dark">
            Proceed To Payment
          </Button>
        </Form>
      </div>
      <div
        style={{ display: bookingFormData ? "block" : "none" }}
        className="col-md-6"
      >
        <h2>Payment</h2>
        <ProcessPayment handlePayment={handlePaymentSuccess} />
      </div>
    </section>
  );
};

export default Booking;
