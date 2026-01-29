/* eslint-disable func-names */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Navbar from '../../containers/Navbar';
import Mood from '../../containers/Mood';
import Menu from '../../containers/Menu';
import Player from '../../containers/Player';
import ADN from '../../containers/ADN';
import Bieres from '../../containers/Bieres';
import FunZone from '../../containers/FunZone';
import Histoires from '../../containers/Histoires';
import Engaged from '../Engaged';
import Reuse from '../Reuse/index';
import Social from '../Social';
import Warning from '../Warning';
import Filter from '../../containers/Filter';
import StaticPage from '../../containers/StaticPage';

import { bieresData } from '../../utils/data/bieresData';
import { checkSafari } from '../../utils/functions/checkSafari';
import { histoiresData } from '../../utils/data/histoiresData';
import translation from '../../assets/lang/index';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: translation.fr },
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  });

const App = ({ displayFilter, isInitLang, initLang }) => {
  const staticPages = ['mentions-legales', 'politique-de-confidentialité', 'politique-de-cookies', 'reglement-du-jeu'];

  useEffect(() => {
    if (isInitLang === false) {
      initLang();
    }
  });

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    if (checkSafari() === false && displayFilter === false) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('.ADN-title', {
        scrollTrigger: {
          trigger: '.ADN-title',
          start: 'top 80%',
        },
        opacity: 0,
        y: 200,
        duration: 1,
      });
      if (window.innerWidth > 767) {
        gsap.from('.ADN-video:nth-child(1)', {
          scrollTrigger: {
            trigger: '.ADN-videos',
            start: 'top 80% ',
          },
          opacity: 0,
          x: -300,
          duration: 1,
        });
        gsap.from('.ADN-video:nth-child(2)', {
          scrollTrigger: {
            trigger: '.ADN-videos',
            start: 'top 80% ',
          },
          opacity: 0,
          y: 300,
          duration: 1,
        });
        gsap.from('.ADN-video:nth-child(3)', {
          scrollTrigger: {
            trigger: '.ADN-videos',
            start: 'top 80% ',
          },
          opacity: 0,
          x: 300,
          duration: 1,
        });
        gsap.from('.FunZone-left', {
          scrollTrigger: {
            trigger: '#fun-zone',
            start: 'top 60%',
          },
          opacity: 0,
          x: -200,
          duration: 1,
        });
        gsap.from('.FunZone-right', {
          scrollTrigger: {
            trigger: '#fun-zone',
            start: 'top 60%',
          },
          opacity: 0,
          x: 200,
          duration: 1,
        });
        gsap.from('.Histoires-title', {
          scrollTrigger: {
            trigger: '.Histoires-title',
            start: '-200px 60%',
          },
          opacity: 0,
          y: 200,
          duration: 1,
        });
        histoiresData.forEach((histoire) => {
          gsap.from(`#histoire${histoire.id}`, {
            scrollTrigger: {
              trigger: `#histoire${histoire.id}`,
              end: '100px center',
              scrub: true,
            },
            y: 200,
            opacity: 0,
            duration: 1,
          });
        });
        gsap.from('.Engaged > h2', {
          scrollTrigger: {
            trigger: '.Engaged > h2',
            start: '-200px 80%',
          },
          y: 200,
          opacity: 0,
          duration: 1,
        });
        let engagedParasCount = gsap.utils.toArray('.Engaged-P').length;
        while (engagedParasCount > 0) {
          gsap.from(`#Engaged-P${engagedParasCount}`, {
            scrollTrigger: {
              trigger: `#Engaged-P${engagedParasCount}`,
              start: '-200px 80%',
              end: '100px center',
            },
            y: 200,
            opacity: 0,
            duration: 1,
          });
          engagedParasCount -= 1;
        }
        let engagedMedalsCount = gsap.utils.toArray('.Engaged-img-wrap > img').length;
        let i = 1;
        while (engagedMedalsCount > 0) {
          gsap.from(`#Engaged-Medal${i}`, {
            scrollTrigger: {
              trigger: `#Engaged-Medal${i}`,
              start: `-${400 - (80 * i)}px 80%`,
              end: '100px center',
            },
            y: 200,
            opacity: 0,
            duration: 1,
          });
          engagedMedalsCount -= 1;
          i += 1;
        }
        gsap.from('.Reuse > h2', {
          scrollTrigger: {
            trigger: '.Reuse > h2',
            start: '-200px 80%',
          },
          y: 200,
          opacity: 0,
          duration: 1,
        });
        gsap.to('#infographieCircleArrow', {
          duration: 15,
          ease: 'none',
          rotation: 360,
          repeat: -1,
        });
        gsap.from('.Reuse-creation', {
          scrollTrigger: {
            trigger: '.Reuse-creation',
            start: '-200px 80%',
          },
          y: 200,
          opacity: 0,
          duration: 1,
        });
        gsap.from('.Social', {
          scrollTrigger: {
            trigger: '.Social',
            start: '-200px 80%',
          },
          y: 200,
          opacity: 0,
          duration: 1,
        });
      }
      else {
        gsap.from('.ADN-video:nth-child(1)', {
          scrollTrigger: {
            trigger: '.ADN-video:nth-child(1)',
            start: 'top 80% ',
          },
          opacity: 0,
          x: -150,
          duration: 1,
        });
        gsap.from('.ADN-video:nth-child(2)', {
          scrollTrigger: {
            trigger: '.ADN-video:nth-child(2)',
            start: 'top 80% ',
          },
          opacity: 0,
          x: 150,
          duration: 1,
        });
        /* gsap.from('.ADN-video:last-child', {
          scrollTrigger: {
            trigger: '.ADN-video:nth-child(3)',
            start: '-150px 80% ',
          },
          opacity: 0,
          y: 150,
          duration: 1,
        }); */
        gsap.from('.FunZone-left', {
          scrollTrigger: {
            trigger: '.FunZone-left:nth-child(1)',
            start: '-200px 80%',
          },
          opacity: 0,
          y: 200,
          duration: 1,
        });
        gsap.from('.FunZone-right', {
          scrollTrigger: {
            trigger: '.FunZone-right',
            start: '-200px 90%',
          },
          opacity: 0,
          y: 200,
          duration: 1,
        });
        gsap.from('.Histoires-title', {
          scrollTrigger: {
            trigger: '.Histoires-title',
            start: '-200px 80%',
          },
          opacity: 0,
          y: 200,
          duration: 1,
        });
        histoiresData.forEach((histoire) => {
          gsap.from(`#bottomTrait${histoire.id}`, {
            scrollTrigger: {
              trigger: `#bottomTrait${histoire.id}`,
              start: 'top 80%',
              end: '100px center',
              scrub: true,
            },
            height: 0,
            duration: 1,
            ease: 'none',
          });
          gsap.from(`#histoireMobile${histoire.id}`, {
            scrollTrigger: {
              trigger: `${histoire.id === 1 ? '.Histoires-title' : `#bottomTrait${histoire.id - 1}`}`,
              start: 'top 80%',
              end: '100px center',
              scrub: true,
            },
            y: 200,
            opacity: 0,
            duration: 1,
          });
        });
        gsap.from('.Engaged > h2', {
          scrollTrigger: {
            trigger: '.Engaged > h2',
            start: '-200px 80%',
          },
          y: 200,
          opacity: 0,
          duration: 1,
        });
        let engagedParasCount = gsap.utils.toArray('.Engaged-P').length;
        while (engagedParasCount > 0) {
          gsap.from(`#Engaged-P${engagedParasCount}`, {
            scrollTrigger: {
              trigger: `#Engaged-P${engagedParasCount}`,
              start: '-200px 80%',
              end: '100px center',
            },
            y: 200,
            opacity: 0,
            duration: 1,
          });
          engagedParasCount -= 1;
        }
        let engagedMedalsCount = gsap.utils.toArray('.Engaged-img-wrap > img').length;
        let i = 1;
        while (engagedMedalsCount > 0) {
          gsap.from(`#Engaged-Medal${i}`, {
            scrollTrigger: {
              trigger: `#Engaged-Medal${i}`,
              start: `-${500 - (80 * i)}px 80%`,
              end: '100px center',
            },
            y: 200,
            opacity: 0,
            duration: 1,
          });
          engagedMedalsCount -= 1;
          i += 1;
        }
        gsap.from('.Reuse-creation', {
          scrollTrigger: {
            trigger: '.Reuse-creation',
            start: '-200px 80%',
          },
          y: 200,
          opacity: 0,
          duration: 1,
        });
      }
    }
  }, [displayFilter, window.location]);

  return (
    <div className={displayFilter && window.location.pathname === '/' ? 'app app-filter' : 'app'}>
      <Route path="/" exact>
        <Filter />
        <Navbar />
        <Menu />
        <Player />
        <Mood />
        <ADN />
        <Bieres slides={bieresData} />
        {/* <FunZone /> */}
        <Histoires />
        <Engaged />
        <Reuse />
        <Social />
        <Warning />
      </Route>
      {
        staticPages.map((staticPage) => (
          <Route key={staticPage} path={`/${staticPage}`} exact>
            <StaticPage page={staticPage} />
          </Route>
        ))
      }
    </div>
  );
};

App.propTypes = {
  displayFilter: PropTypes.bool.isRequired,
  isInitLang: PropTypes.bool.isRequired,
  initLang: PropTypes.func.isRequired,
};

export default App;
