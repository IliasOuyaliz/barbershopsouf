import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Slider } from "../components/Slider";
import { About } from "../components/About";
import { Service } from "../components/Service";
import { Gallery } from "../components/Gallery";
import { VideoArea } from "../components/VideoArea";
import { Masters } from "../components/Masters";
import { FindUs } from "../components/FindUs";
import axios from "axios";

export default () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");

  let data = {
    name,
    phone,
    email,
    date,
    time,
  };

  const FormSubmitHandler = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api/mailer",
      data,
    }).then((res) => console.log(res));
  };

  return (
    <Layout>
      <Slider />
      <About />
      <Service />
      <Gallery />
      <VideoArea />
      {/* <Masters /> */}
      <section className="contact-section" id="section7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form
                id="test-form"
                className="white-popup-block mfp-hide"
                style={{ display: "flex !important", justifyContent: "center" }}
              >
                <div className="popup_box " style={{ padding: 0 }}>
                  <div className="popup_inner">
                    <h3>Maak een Afspraak</h3>
                    <form action="#">
                      <div className="row">
                        <div className="col-xl-6 col-md-6">
                          <input
                            id="datepicker"
                            value={date}
                            placeholder="Datum"
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                        <div className="col-xl-6 col-md-6">
                          <input
                            id="timepicker"
                            placeholder="Tijd"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                          />
                        </div>

                        <div className="col-xl-6 col-md-6">
                          <input
                            type="text"
                            placeholder="Uw naam"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="col-xl-6 col-md-6">
                          <input
                            type="text"
                            placeholder="Telefoonnummer"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div className="col-xl-12">
                          <input
                            type="email"
                            placeholder="Uw email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-xl-12">
                          <button
                            onClick={FormSubmitHandler}
                            type="submit"
                            className="boxed-btn3"
                          >
                            Verzend
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-home"></i>
                </span>
                <div className="media-body">
                  <h3>Waldhoornplein 11.</h3>
                  <p>Rijswijk, 2287 EH</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-tablet"></i>
                </span>
                <div className="media-body">
                  <h3>071-1001000</h3>
                  <p>Ma tot Vr 09:00 tot 18:00</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i className="ti-email"></i>
                </span>
                <div className="media-body">
                  <h3>info@barbershopsouf.nl</h3>
                  <p>Heeft u een vraag? Mail ons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FindUs />
    </Layout>
  );
};
