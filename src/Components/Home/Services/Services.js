import React, { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);

  return (
    <section
      style={{ maxWidth: "100rem" }}
      className="card mb-5 border-0 bg-transparent"
      id="services"
    >
      <div className="row d-flex justify-content-center">
        {serviceData.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
