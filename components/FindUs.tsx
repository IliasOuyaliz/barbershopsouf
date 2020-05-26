import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

type Props = {};

export const FindUs: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className="find_us_area find_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-7 col-lg-6 offset-lg-6">
            <div className="find_info">
              <h3 className="find_info_title">Neem contact op</h3>
              <div className="single_find d-flex">
                <div className="icon">
                  <i className="flaticon-placeholder"></i>
                </div>
                <div className="find_text">
                  <h3>Locatie</h3>
                  <p>Waldhoornplein 11, 2287 EH Rijswijk</p>
                </div>
              </div>
              <div className="single_find d-flex">
                <div className="icon">
                  <i className="flaticon-phone-call"></i>
                </div>
                <div className="find_text">
                  <h3>Bel Ons</h3>
                  <p>071-1001000</p>
                </div>
              </div>
              <div className="single_find d-flex">
                <div className="icon">
                  <i className="flaticon-paper-plane"></i>
                </div>
                <div className="find_text">
                  <h3>Mail Ons</h3>
                  <p>info@barbershopsouf.nl</p>
                </div>
              </div>
              <div className="single_find">
                <Link
                  activeClass="active"
                  to="section7"
                  spy={true}
                  smooth={true}
                  offset={-180}
                  duration={500}
                >
                  <div className="book_btn">
                    <a className="popup-with-form" href="#test-form">
                      Maak een Afspraak
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
