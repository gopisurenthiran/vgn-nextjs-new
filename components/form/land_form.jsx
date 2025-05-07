"use client";
import React from "react";
import DropdownSelect from "../common/DropdownSelect";
import MapComponent from "../common/MapComponent";

export default function landform() {
  return (
    <section className=" style-2 mt-10">
      <div className="wrap-map">
      <div className="heading-section mt-5">
                  {/* <h2 className="title">Land Enquiry / Joint Ventures</h2> */}
                  {/* <p className="text-1">
                    We'll get to know you to understand your selling goals,
                    explain the selling process so you know what to expect.
                  </p> */}
                </div>
      </div>
      <div className="box">
        <div className="tf-container">
          <div className="row">
            <div className="col-8 mx-auto mt-5">
              <form
                id="contactform"
                onSubmit={(e) => e.preventDefault()}
                className="form-contact"
              >
                

                <div className="cols">
                  <fieldset>
                    {/* <label htmlFor="name">Name*</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    {/* <label htmlFor="phone">Phone Number*</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                      name="phone"
                      id="phone"
                      required
                    />
                  </fieldset>
                </div>

                <div className="cols">
                  <fieldset>
                    {/* <label htmlFor="email">Email ID*</label> */}
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      id="email"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    {/* <label htmlFor="company">Location*</label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      name="company"
                      id="company"
                      required
                    />
                  </fieldset>
                </div>

                {/* <div className="cols">
                  <fieldset>
                    <label htmlFor="address">Registered Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Registered Address"
                      name="address"
                      id="address"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="organization">Organization Type*</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Organization Type"
                      name="organization"
                      id="organization"
                      required
                    />
                  </fieldset>
                </div> */}

                {/* <div className="cols">
                  
                  
                  <div className="select">
                    <label className="text-1 fw-6 mb-12">
                      Type of Business 
                    </label>
                    <DropdownSelect
                      options={["Land Sourcing", "Commerical Sales", "Residential Sales", "Others"]}
                      addtionalParentClass=""
                    />
                  </div>
                  <fieldset>
                    <label htmlFor="association">Member of any Association</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Association (if any)"
                      name="association"
                      id="association"
                    />
                  </fieldset>
                </div> */}

                <fieldset>
                  {/* <label htmlFor="rera">Message</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="rera"
                    id="rera"
                  />
                </fieldset>

                {/* <fieldset>
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    id="message"
                    required
                    defaultValue={""}
                    className="form-control"
                  />
                </fieldset> */}

                <div className="send-wrap mt-5">
                  <button
                    className="tf-btn bg-color-primary fw-7 pd-8"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

