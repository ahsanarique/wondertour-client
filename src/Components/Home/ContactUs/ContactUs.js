import React from "react";

const ContactUs = () => {
  const contactFormStyle = {
    backgroundColor: "rgba(0, 72, 85, 0.9)", 
  };

  return (
    <section className="text-light m-5 rounded" style={contactFormStyle} id="contact">
      <div className="row">
        <div className="col-sm-12 m-3">
          <h1>Contact Us</h1>
          <hr />
        </div>
        <div className="col-sm-12">
          <form className="mx-5 my-3">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Your Message"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-warning btn-lg" type="submit">
                Send Us a Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
