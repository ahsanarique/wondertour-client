import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState("");

  const onSubmit = (data) => {
    const serviceData = {
      title: data.title,
      place: data.place,
      image: imageURL,
      type: data.type,
      price: data.price,
      duration: data.duration,
      description: data.description,
      dateAdded: new Date().toDateString(),
    };

    fetch("https://pure-inlet-21064.herokuapp.com/addService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => {
        alert("Service Added Successfully");
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
        }
      });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "24e85e60f588cdb7cb95cd39f1c3953b");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => setImageURL(response.data.data.display_url))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="ms-3 row">
      <div className="col-md-10">
        <h2>Add a New Tour Event</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="my-2">
            <Form.Label>
              Tour Title:{" "}
              {errors.title && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              placeholder="Add Tour Title"
              {...register("title", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Tour Venue:{" "}
              {errors.place && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              placeholder="Add Tour Venue"
              {...register("place", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Select Tour Type:{" "}
              {errors.type && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              as="select"
              placeholder="Select Tour Type"
              {...register("type", { required: true })}
            >
              <option>Adventure Tour</option>
              <option>City Tour</option>
              <option>Couple Tour</option>
              <option>Group Tour</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Duration:{" "}
              {errors.duration && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="For how many days?"
              {...register("duration", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Price:{" "}
              {errors.price && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Set per person price"
              {...register("price", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label>
              Tour Description:{" "}
              {errors.description && (
                <span className="text-danger">Required</span>
              )}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Add a summarized description of the tour"
              {...register("description", { required: true })}
            />
          </Form.Group>

          <Form.Group className="my-2">
            <Form.Label className="mb-2">Upload Image: </Form.Label> <br />
            <Form.Control
              type="file"
              name="image"
              onChange={handleImageUpload}
            />
          </Form.Group>

          <Button className="mt-3" type="submit" variant="dark" size="lg" block>
            Add Tour Event
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddService;
