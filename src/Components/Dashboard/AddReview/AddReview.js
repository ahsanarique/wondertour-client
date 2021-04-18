import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../../App";

const AddReview = ({ serviceData }) => {
  const [loggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      title: data.title,
      review: data.review,
      image: loggedInUser.image,
    };

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        alert("Review Added Successfully");
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
        }
      });
  };

  return (
    <section>
      <div className="mx-5">
        <h2>Add a Review</h2>
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
              Review On:{" "}
              {errors.title && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              as="select"
              {...register("title", { required: true })}
            >
              <option>--Select an Event--</option>
              {serviceData.map((service) => (
                <option key={service._id}>{service.title}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Your Review:{" "}
              {errors.review && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your Review"
              {...register("review", { required: true })}
            />
          </Form.Group>
          <Button className="mt-3" type="submit" variant="dark" size="lg">
            Submit Review
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddReview;
