import React from 'react';
import { Trans } from 'react-i18next';
import { histoiresData } from '../../utils/data/histoiresData';

const Histoires = () => (
  <div className="Histoires" id="notre-histoire">
    <h2 className="Histoires-title Histoires-title-font w900"><Trans components={{ span: <span /> }}>histoire_title</Trans></h2>
    <div className="Histoires-container">
      <span className="Histoires-middleTrait" />
      <div className="Histoires-left">
        {
            histoiresData.map((histoire) => {
              if (histoire.id % 2 !== 0) {
                return (
                  <div key={histoire.id} id={`histoire${histoire.id}`} className="Histoires-histoire">
                    <span className="Histoires-histoire-upperTrait" />
                    <div className="Histoires-histoire-img-wrap">
                      <img src={histoire.urlImg} alt={histoire.alt} className="Histoires-histoire-img" />
                      <p className="Histoires-histoire-date yellow w900 text-shadow">{histoire.date}</p>
                    </div>
                    <p className="Histoires-histoire-description">{histoire.description}</p>
                  </div>
                );
              }
              return null;
            })
          }
      </div>
      <div className="Histoires-right">
        {
            histoiresData.map((histoire) => {
              if (histoire.id % 2 === 0) {
                return (
                  <div key={histoire.id} id={`histoire${histoire.id}`} className="Histoires-histoire">
                    <span className="Histoires-histoire-upperTrait" />
                    <div className="Histoires-histoire-img-wrap">
                      <img src={histoire.urlImg} alt={histoire.alt} className="Histoires-histoire-img" />
                      <p className="Histoires-histoire-date yellow w900 text-shadow">{histoire.date}</p>
                    </div>
                    <p className="Histoires-histoire-description">{histoire.description}</p>
                  </div>
                );
              }
              return null;
            })
          }
      </div>
    </div>
    <div className="Histoires-containerMobile">
      {
          histoiresData.map((histoire) => (
            <div key={histoire.id} id={`histoireMobile${histoire.id}`} className="Histoires-histoireMobile">
              <div className="Histoires-histoireMobile-img-wrap">
                <img src={histoire.urlImg} alt={histoire.alt} className="Histoires-histoireMobile-img" />
                <p className="Histoires-histoireMobile-date yellow w900 text-shadow">{histoire.date}</p>
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-img-rightTrait" />
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-img-leftTrait" />
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-img-upperLeftTrait" />
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-img-upperRightTrait" />
              </div>
              <div className="Histoires-histoireMobile-description-wrap">
                <p className="Histoires-histoireMobile-description">{histoire.description}</p>
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-description-rightTrait" />
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-description-leftTrait" />
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-description-bottomLeftTrait" />
                <span className="Histoires-histoireMobile-trait Histoires-histoireMobile-description-bottomRightTrait" />
                <span id={`bottomTrait${histoire.id}`} className="Histoires-histoireMobile-trait Histoires-histoireMobile-bottomTrait" />
              </div>
            </div>
          ))
        }
    </div>
  </div>
);

export default Histoires;
