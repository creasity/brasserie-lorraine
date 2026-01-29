import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Contact from '../../containers/Contact';

const Social = () => {
  const { t } = useTranslation();

  return (
    <div className="Social">

      <section class="text-images-section">
        <p class="intro-text">
          Bienvenue à la Brasserie Lorraine, un lieu authentique où tradition et convivialité
          se rencontrent autour d’une cuisine généreuse.
        </p>

        <div class="images-row">
          <img src="/images/brasserie-1.jpg" alt="Brasserie Lorraine intérieur" />
          <img src="/images/brasserie-2.jpg" alt="Brasserie Lorraine terrasse" />
        </div>

        <p class="bottom-text">
          Installée au cœur de la ville, la brasserie vous accueille toute l’année pour
          partager un moment chaleureux autour de plats emblématiques.
        </p>
      </section>

      <div className="Social-socials">
        <div className="Social-social">
          <a href={t('social_fb_link')} target="_blank" rel="noreferrer"><img src="/assets/facebook-icon.png" alt="Facebook icon" /></a>
          <a href={t('social_fb_link')} target="_blank" rel="noreferrer"><img src="/assets/facebook-icon-hover.png" alt="Facebook icon hover" /></a>
        </div>
        <div className="Social-social">
          <a href={t('social_insta_link')} target="_blank" rel="noreferrer"><img src="/assets/insta-icon.png" alt="Instagram icon" /></a>
          <a href={t('social_insta_link')} target="_blank" rel="noreferrer"><img src="/assets/insta-icon-hover.png" alt="Instagram icon hover" /></a>
        </div>
      </div>
      <div className="Social-politics">
        <p className="w900"><Trans components={{ NavLink: <NavLink /> }}>social_confidentialite</Trans></p>
        <p className="w900"><Trans components={{ NavLink: <NavLink /> }}>social_mentions_legales</Trans></p>
        <p className="w900"><Trans components={{ NavLink: <NavLink /> }}>social_cookies</Trans></p>
      </div>
      <Contact />
    </div>
  );
};

export default Social;
