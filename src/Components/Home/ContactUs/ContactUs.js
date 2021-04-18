import React from "react";

const ContactUs = () => {
  const contactFormStyle = {
    backgroundColor: "rgba(0, 72, 85, 0.9)",
    width: "70vw",
  };

  return (
    <section className="text-light card" style={contactFormStyle} id="contact">
      <div className="card-body ">
        <div>
          <h1>Contact Us</h1>
          <hr />
        </div>
        <div className="m-3">
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control form-control-lg"
                placeholder="Your Message"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-light btn-lg" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
