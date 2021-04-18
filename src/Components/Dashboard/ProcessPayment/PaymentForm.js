import React, { useState, useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "./useResponsiveFormSize";
import "./PaymentForm.css";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentSuccess, setPaymentSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      alert("An error occurred. Please try again.");
    } else {
      setPaymentSuccess(paymentMethod.id);
      alert("Payment successful");
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement options={options} />
      </label>
      <label>
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <label>
        CVC
        <CardCvcElement options={options} />
      </label>
      <button className="btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default SplitForm;
