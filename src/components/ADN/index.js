import React from "react";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";

const ADN = ({ setPlayerOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="notre-adn" className={`ADN videosFormat${t("adn_videos_format")}`}>
      <h2 className="ADN-title ADN-title-font w900">
        <Trans components={{ span: <span /> }}>adn_title</Trans>
      </h2>
      <div className={`ADN-videos videosFormat${t("adn_videos_format")}`}>
        <div className={`ADN-video videosFormat${t("adn_videos_format")}`}>
          <div className="ADN-video-iframeWrap">
            {/* <iframe src={t('adn_videos_film_src')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
            <video controls autoPlay muted src="/assets/masterclass.mp4" />
          </div>
          <h3 className="ADN-video-title w900">{t("adn_videos_film_title")}</h3>
        </div>
        <div className={`ADN-video videosFormat${t("adn_videos_format")}`}>
          <div className="ADN-video-iframeWrap">
            {/* <iframe
              src={t("adn_videos_valeurs_src")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
              allowFullScreen
            /> */}
            <video controls autoPlay muted src="/assets/videoHistoire.mp4" />
          </div>
          <h3 className="ADN-video-title w900">
            {t("adn_videos_valeurs_title")}
          </h3>
        </div>

        <div className={`ADN-video videosFormat${t("adn_videos_format")}`}>
          <div
            onClick={() => setPlayerOpen(true, "visite")}
            className="ADN-video-player"
          >
            <img
              src="/assets/placeholder-vod.jpg"
              className="ADN-video-player-placeholder"
              alt="biere-lorraine-placeholder-video"
            />
            <img
              src="/assets/player-icon-video.png"
              className="ADN-video-player-icon"
              alt="player-icon-video"
            />
            <span className="ADN-video-player-square ADN-video-player-square-left" />
            <span className="ADN-video-player-square ADN-video-player-square-right" />
          </div>
          <h3 className="ADN-video-title w900">
            {t("adn_videos_visite_title")}
          </h3>
        </div>
      </div>
    </div>
  );
};

ADN.propTypes = {
  setPlayerOpen: PropTypes.func.isRequired,
};

export default ADN;
