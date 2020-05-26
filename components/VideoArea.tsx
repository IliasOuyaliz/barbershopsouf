import React from "react";

type Props = {};

export const VideoArea: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className="video_area" id="section5">
      <div className="container-fluid p-0">
        <div className="row align-items-center no-gutters">
          <div className="col-xl-6 col-lg-6">
            <div className="video_info">
              <div className="about_info">
                <div className="section_title mb-20px">
                  <span>Ons Doel?</span>
                  <h3>Wij streven naar professionaliteit</h3>
                </div>
                <p>
                  Wij doen er alles aan om de beleving bij BarbershopSouf zo
                  aangenaam mogelijk te maken en u het gewenste resultaat te
                  leveren. De diensten die wij aanbieden zijn veelzijdig en u
                  wordt behandeld door een ervaren specialist.
                </p>
                <a href="#" className="boxed-btn3">
                  Stel een Vraag
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="video_thumb">
              <div className="video_thumb_inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
