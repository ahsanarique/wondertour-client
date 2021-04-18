import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51IeABHBZSTYeOCzD7uM8IeO4P2228nFl3RLz2HymI6V50RGMy5IHPxatz677tCgVH1VcYmOZ2VNZCvtOMyeZksh400MbOWtNKC"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default ProcessPayment;
