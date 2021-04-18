import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminEmail = {
      email: data.email,
    };

    fetch("https://pure-inlet-21064.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminEmail),
    })
      .then((res) => {
        alert("Admin Email Added Successfully");
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
        }
      });
  };

  return (
    <section className="ms-3 row">
      <div className="col-md-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="my-2">
            <Form.Label>
              Enter Admin Email:{" "}
              {errors.email && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              placeholder="Admin Email"
              {...register("email", { required: true })}
            />
          </Form.Group>
          <Button type="submit" variant="dark" size="lg">
            Save
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default MakeAdmin;
