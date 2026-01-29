/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Mood = ({ displayFilter }) => {
  const { t } = useTranslation();
  const [stopAnimScroll, setStopAnimScroll] = useState(false);
  useEffect(() => {
    if (!displayFilter) {
      window.setTimeout(() => {
        document.querySelector('#accueil > video').classList.add('opacity1');
        document.querySelector('#accueil > div.Mood-iconScroll').classList.add('opacity1');
      }, 500);

      // Animate #Moodinmartinique
      window.setTimeout(() => {
        // Wrap every letter in a span
        const textWrapper = document.querySelector('.ml16');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        document.getElementById('MOODINMARTINIQUE').classList.add('opacity1');
        // eslint-disable-next-line no-undef
        anime.timeline({ loop: true })
          .add({
            targets: '.ml16 .letter',
            translateY: [-110, 0],
            easing: 'easeOutExpo',
            duration: 1400,
            opacity: 1,
            delay: (el, i) => 30 * i,
          }).add({
            targets: '.ml16',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 10000,
          });
      }, 1700);
    }
  });
  return (
    <div id="accueil" className="Mood">
      <h1 id="MOODINMARTINIQUE" className="Mood-title Mood-title-font w900 ml16">{t('mood_title')}</h1>
      <video autoPlay loop muted playsInline><source src="/assets/anim-mood.mp4" type="video/mp4" /></video>
      <p className="Mood-note">{t('mood_note')}</p>
      <div onMouseEnter={() => setStopAnimScroll(true)} className={stopAnimScroll ? 'Mood-iconScroll stopAnimScroll' : 'Mood-iconScroll'}>
        <svg width="40" height="70" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="19.2921" y1="61.3147" x2="28.2921" y2="52.2937" stroke="white" strokeWidth="2" />
          <line x1="11.7071" y1="52.2929" x2="20.1924" y2="60.7782" stroke="white" strokeWidth="2" />
          <rect x="1" y="1" width="38" height="68" rx="16.5" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

Mood.propTypes = {
  displayFilter: PropTypes.bool.isRequired,
};

export default Mood;
