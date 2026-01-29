import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Contact from '../../containers/Contact';

const Social = () => {
  const { t } = useTranslation();

  return (
    <div className="Social">

      <div className="text-images-section">
        <p className="intro-text">
La Brasserie Lorraine s’inscrit depuis toujours dans l’histoire industrielle de la Martinique, avec un savoir-faire reconnu dans la production de bières et de boissons maltées. Nous sommes attachés à une fabrication locale de qualité, et œuvrons chaque jour à faire vivre cette tradition tout en accompagnant le développement de nouvelles saveurs et la diffusion de nos produits au-delà du territoire.
Face aux surcoûts liés à l’éloignement géographique et au transport maritime, l’aide au fret UE constitue un appui déterminant. Elle contribue à atténuer les charges liées à l’importation des matières premières indispensables à notre production et facilite l’exportation de nos créations vers le marché européen.
C’est un véritable coup de pouce pour notre activité : nous pouvons continuer à produire avec passion, renforcer notre compétitivité et valoriser la production martiniquaise sur le marché national.
(Photo de matières premières)
(Photo de la chaîne de production de l’usine)
(Photo de produits finis embouteillés)
Pour la période de janvier 2023 à décembre 2024, ce dispositif représente un montant de 972 258,46€.
 Ce soutien est rendu possible grâce au cofinancement de l’Union européenne et de la Collectivité Territoriale de Martinique, dans le cadre du Programme Opérationnel Martinique 2021-2027, illustrant l’engagement des institutions en faveur du développement économique local.
        </p>

        <div className="images-row">
          <img src="/assets/BL_-_logo_cofinancement_UE.png" alt="Brasserie Lorraine intérieur" />
          <img src="/assets/BL_-_logo_ctm.jpeg" alt="Brasserie Lorraine terrasse" />
        </div>
      </div>

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
