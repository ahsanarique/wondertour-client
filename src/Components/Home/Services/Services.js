import React, { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetch("https://pure-inlet-21064.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);

  return (
    <section
      className="mb-5 mx-2"
      id="services"
    >
      <div className="row">
        {serviceData.map((service) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={service._id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
