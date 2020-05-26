import React from "react";

type Props = {};

export const Service: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className="service_area" id="section3">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title2 text-center mb-90">
              <i className="flaticon-scissors"></i>
              <h3>Onze Diensten</h3>
            </div>
          </div>
        </div>
        <div className="white_bg_pos">
          <div className="row">
            <div className="col-xl-6">
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/1.png" alt="" />
                  </div>
                  <span>Gezichtsbehandeling</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/2.png" alt="" />
                  </div>
                  <span>Glad Geschoren</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/3.png" alt="" />
                  </div>
                  <span>Goed Geschoren</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/4.png" alt="" />
                  </div>
                  <span>Scherp Geschoren</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/5.png" alt="" />
                  </div>
                  <span>Gezichtsmassage</span>
                </div>
                <p>………………………..€15</p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/6.png" alt="" />
                  </div>
                  <span>Standaard Knippen</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/7.png" alt="" />
                  </div>
                  <span>Knippen en Shampoo</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/8.png" alt="" />
                  </div>
                  <span>Haarbehandeling</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/9.png" alt="" />
                  </div>
                  <span>Baard Trimmen</span>
                </div>
                <p>………………………..€15</p>
              </div>
              <div className="single_service d-flex justify-content-between align-items-center">
                <div className="service_inner d-flex align-items-center">
                  <div className="thumb">
                    <img src="img/service/10.png" alt="" />
                  </div>
                  <span>Baard en Snor</span>
                </div>
                <p>………………………..€15</p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="book_btn text-center">
                <a className="boxed-btn3 popup-with-form" href="#test-form">
                  Maak een Afspraak
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
