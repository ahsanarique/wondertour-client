import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ManageTour = () => {
  const [deleteId, setDeleteId] = useState("");
  const [serviceData, setServiceData] = useState([]);

  const handleDelete = (event) => {
    const deleteId = event.currentTarget.id;
    setDeleteId(deleteId);

    fetch("https://pure-inlet-21064.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  };

  useEffect(() => {
    if (deleteId !== "") {
      const url = `https://pure-inlet-21064.herokuapp.com/deleteService/${deleteId}`;
      axios.delete(url);
    }
  }, [deleteId, serviceData]);

  useEffect(() => {
    fetch("https://pure-inlet-21064.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);

  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <section className="ms-3">
      <Table bordered responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Place</th>
            <th>Tour Type</th>
            <th>Added On</th>
            <th>Budget/Person</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((service) => (
            <tr key={service._id}>
              <td>{service.title}</td>
              <td>{service.place}</td>
              <td>{service.type}</td>
              <td>{service.date}</td>
              <td>$ {service.price}</td>
              <td>
                <button
                  id={service._id}
                  onClick={handleDelete}
                  className="btn btn-sm btn-outline-danger"
                >
                  {deleteIcon}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default ManageTour;
