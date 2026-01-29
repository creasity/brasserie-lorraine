import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import closeIcon from '../../assets/illu/close-icon.svg';
import closeIconHover from '../../assets/illu/close-icon-hover.svg';

const Player = ({ playerOpen, setPlayerOpen, currentVideo }) => {
  const { t } = useTranslation();
  const [isCloseIconHover, setIsCloseIconHover] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    if (playerOpen) {
      window.setTimeout(() => {
        setShowIframe(true);
      }, 500);
    }
    else {
      setShowIframe(false);
    }
  }, [playerOpen]);

  return (
    <div className={!playerOpen ? 'Player' : 'Player open'}>
      <div onClick={() => setPlayerOpen(false, '')} onMouseEnter={() => setIsCloseIconHover(true)} onMouseLeave={() => setIsCloseIconHover(false)} className="Player-closer-container">
        <img src={isCloseIconHover ? closeIconHover : closeIcon} alt="close-icon" />
      </div>
      <div className="Player-iframe-container">
        {
          ((currentVideo === 'manifesto') && showIframe) && (
            <iframe src={t('player_manifesto_src')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )
        }
        {
          ((currentVideo === 'film') && showIframe) && (
            <iframe src={t('player_film_src')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )
        }
        {
          ((currentVideo === 'visite') && showIframe) && (
            <iframe src={t('player_iframe_src')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )
        }
      </div>
    </div>
  );
};

Player.propTypes = {
  playerOpen: PropTypes.bool.isRequired,
  setPlayerOpen: PropTypes.func.isRequired,
  currentVideo: PropTypes.string.isRequired,
};

export default Player;
