import React from "react";

type Props = {};

export const About: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className="about_area" id="section2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about_thumb">
              <img src="img/about/about_lft.png" alt="" />
              <div className="opening_hour text-center">
                <i className="flaticon-clock"></i>
                <h3>Openingstijden</h3>
                <p>Ma-Vr (09:00-18:00)</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about_info">
              <div className="section_title mb-20px">
                <span>Over Ons</span>
                <h3>De beste kapperszaak in Rijswijk en omgeving</h3>
              </div>
              <p>
                Barbershopsouf is een nieuwe kapperszaak geopend in Rijswijk.
                Onze specialisten hebben veel ervaring en werken uiterst
                professioneel.
              </p>
              <a href="#" className="boxed-btn3">
                Meer weten
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
