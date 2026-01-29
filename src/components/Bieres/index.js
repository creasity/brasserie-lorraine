/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { bieresData } from '../../utils/data/bieresData';
import arrow from '../../assets/illu/arrow-next-biere.svg';
import arrowHover from '../../assets/illu/arrow-next-biere-hover.svg';

const Bieres = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [arrowPreviousHover, setArrowPreviousHover] = useState(false);
  const [arrowNextHover, setArrowNextHover] = useState(false);
  const [biereHover, setBiereHover] = useState(false);
  const { length } = bieresData;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(bieresData) || bieresData.length <= 0) {
    return null;
  }

  useEffect(() => {
    let xAbstraiteTop = 0;
    let xAbstraiteBottom = 0;
    const widthVw = window.innerWidth;
    switch (true) {
      case (widthVw > 1600):
        xAbstraiteTop = 296;
        xAbstraiteBottom = 341;
        break;
      case (widthVw > 1200):
        xAbstraiteTop = 207;
        xAbstraiteBottom = 239;
        break;
      case (widthVw > 767):
        xAbstraiteTop = 122;
        xAbstraiteBottom = 211;
        break;
      case (widthVw <= 767):
        xAbstraiteTop = 71;
        xAbstraiteBottom = 71;
        break;
      default:
        break;
    }
    gsap.fromTo('.Bieres-slide-abstraite1', {
      opacity: 0,
      x: xAbstraiteTop * -2.5,
      duration: 1,
    }, { opacity: 1, x: -xAbstraiteTop });
    window.setTimeout(() => {
      gsap.fromTo('.Bieres-slide-abstraite2', {
        opacity: 0,
        x: xAbstraiteTop * 2.5,
        duration: 1,
      }, { opacity: 1, x: xAbstraiteTop });
    }, 300);
    window.setTimeout(() => {
      gsap.fromTo('.Bieres-slide-abstraite3', {
        opacity: 0,
        x: xAbstraiteBottom * -2.5,
        duration: 1,
      }, { opacity: 1, x: -xAbstraiteBottom });
    }, 600);
    window.setTimeout(() => {
      gsap.fromTo('.Bieres-slide-abstraite4', {
        opacity: 0,
        x: xAbstraiteBottom * 2.5,
        duration: 1,
      }, { opacity: 1, x: xAbstraiteBottom });
    }, 900);
  }, [current]);

  useEffect(() => {
    // Movement Animation to happen
    const card = document.querySelector('.Bieres-slide-cardImage');
    const container = document.querySelector('.Bieres-slide-containerImage');
    const wrap = document.querySelector('.Bieres-slide-imageWrap');
    const biere = document.querySelector('.Bieres-slide-image');
    container.addEventListener('mouseover', (e) => {
      setBiereHover(true);
    });
    container.addEventListener('mouseout', (e) => {
      setBiereHover(false);
    });

    // Moving Animation Event
    container.addEventListener('mousemove', (e) => {
      wrap.style.transform = 'scale(1.2)';
      let xAxis = ((window.innerWidth / 2) - e.clientX) / 25;
      const yAxis = ((window.innerHeight / 2) - e.clientY) / 25;
      xAxis *= -1;
      /* yAxis *= -1; */
      let zAxis = (xAxis + yAxis) * 4;
      if (xAxis < 0 && yAxis < 0) {
        zAxis = ((xAxis * -1) + (yAxis * -1)) * 4;
      }
      if (xAxis < 0 && yAxis > 0) {
        zAxis = ((xAxis * -1) + yAxis) * 4;
      }
      if (xAxis > 0 && yAxis < 0) {
        zAxis = (xAxis + (yAxis * -1)) * 4;
      }
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      biere.style.transform = `translateZ(${zAxis}px)`;
      window.setTimeout(() => {
        if (container.classList.contains('hover') === false) {
          wrap.style.transform = 'scale(1)';
        }
      }, 10);
    });
    // Animate In
    container.addEventListener('mouseenter', (e) => {
      card.style.transition = 'none';
    });
    // Animate Out
    container.addEventListener('mouseleave', (e) => {
      card.style.transition = 'all 0.5s ease';
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });

  return (
    <>
      <section className="Bieres" id="nos-bieres">
        <img src={arrowPreviousHover ? arrowHover : arrow} className="Bieres-arrow Bieres-previous-arrow" onClick={prevSlide} onMouseEnter={() => setArrowPreviousHover(true)} onMouseLeave={() => setArrowPreviousHover(false)} alt="Arrow-previous-biere" />
        <img src={arrowNextHover ? arrowHover : arrow} className="Bieres-arrow Bieres-next-arrow" onClick={nextSlide} onMouseEnter={() => setArrowNextHover(true)} onMouseLeave={() => setArrowNextHover(false)} alt="Arrow-next-biere" />
        {bieresData.map((slide, index) => (
          <div
            className={index === current ? `Bieres-slide active ${biereHover ? 'biereHover' : ''} Bieres-slide${index}` : `Bieres-slide Bieres-slide${index}`}
            key={slide.id}
            onMouseEnter={() => setBiereHover(false)}
          >
            {index === current && (
              <>
                <h2 onMouseEnter={() => setBiereHover(false)} className="Bieres-slide-name Bieres-slide-name-font w900"><span className="Bieres-slide-name-font yellow w900">{slide.name_yellow}</span>{slide.name_white}</h2>
                <div
                  className={`Bieres-slide-containerImage ${biereHover ? 'hover' : ''}`}
                >
                  <div className={`Bieres-slide-cardImage ${biereHover ? 'hover' : ''} biere${slide.id}`}>
                    <div className="Bieres-slide-imageWrap">
                      <img
                        src={slide.image}
                        alt={slide.image}
                        className={`Bieres-slide-image ${biereHover ? 'hover' : ''}`}
                      />
                    </div>
                  </div>
                </div>
                <div onMouseEnter={() => setBiereHover(false)} style={{ backgroundImage: 'url(/assets/forme-abstraite1.png)' }} className="Bieres-slide-abstraite Bieres-slide-abstraite1">
                  <div className="Bieres-slide-abstraite-mask" />
                  <div className="Bieres-slide-abstraite-text">
                    <p className="Bieres-slide-abstraite-title yellow w900">{t('bieres_carac1_title')}</p>
                    <p className="Bieres-slide-abstraite-desc">{slide.profil}</p>
                  </div>
                </div>
                <div onMouseEnter={() => setBiereHover(false)} style={{ backgroundImage: 'url(/assets/forme-abstraite2.png)' }} className="Bieres-slide-abstraite Bieres-slide-abstraite2">
                  <div className="Bieres-slide-abstraite-mask" />
                  <div className="Bieres-slide-abstraite-text">
                    <p className="Bieres-slide-abstraite-title yellow w900">{t('bieres_carac2_title')}</p>
                    <p className="Bieres-slide-abstraite-desc">{slide.arome}</p>
                  </div>
                </div>
                <div onMouseEnter={() => setBiereHover(false)} style={{ backgroundImage: 'url(/assets/forme-abstraite3.png)' }} className="Bieres-slide-abstraite Bieres-slide-abstraite3">
                  <div className="Bieres-slide-abstraite-mask" />
                  <div className="Bieres-slide-abstraite-text">
                    <p className="Bieres-slide-abstraite-title yellow w900">{t('bieres_carac3_title')}</p>
                    <p className="Bieres-slide-abstraite-desc">{slide.robe}</p>
                  </div>
                </div>
                <div onMouseEnter={() => setBiereHover(false)} style={{ backgroundImage: 'url(/assets/forme-abstraite4.png)' }} className="Bieres-slide-abstraite Bieres-slide-abstraite4">
                  <div className="Bieres-slide-abstraite-mask" />
                  <div className="Bieres-slide-abstraite-text">
                    <p className="Bieres-slide-abstraite-title yellow w900">{t('bieres_carac4_title')}</p>
                    <p className="Bieres-slide-abstraite-desc">{slide.leplus}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
      {/* <section className="BieresMobile">
        {
          bieresData.map((biere) => (
            <div className="BieresMobile-biere" key={biere.id}>
              <p className="BieresMobile-biere-title BieresMobile-biere-title-font"><span className="BieresMobile-biere-title-font yellow">{biere.name_yellow}</span>{biere.name_white}</p>
              <img src={biere.image} alt={`${biere.name}`} className="BieresMobile-biere-image" />
              <div className="BieresMobile-biere-description">
                <p className="BieresMobile-biere-description-font"><span className="BieresMobile-biere-description-font yellow">PROFIL</span> : {biere.profil}</p>
                <p className="BieresMobile-biere-description-font"><span className="BieresMobile-biere-description-font yellow">ARÔME</span> : {biere.arome}</p>
                <p className="BieresMobile-biere-description-font"><span className="BieresMobile-biere-description-font yellow">ROBE</span> : {biere.robe}</p>
                <p className="BieresMobile-biere-description-font"><span className="BieresMobile-biere-description-font yellow">LE +</span> : {biere.leplus}</p>
              </div>
            </div>
          ))
        }
      </section> */}
    </>
  );
};

export default Bieres;
