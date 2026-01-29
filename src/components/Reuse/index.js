import React, { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';

const Reuse = () => {
  const [iconActive, setIconActive] = useState('graine');
  useEffect(() => {
    if (window.location.pathname === '/') {
      setIconActive('graine');
    }
    window.setTimeout(() => {
      if (window.location.pathname === '/') {
        setIconActive('concassage');
      }
      window.setTimeout(() => {
        if (window.location.pathname === '/') {
          setIconActive('brassage');
        }
        window.setTimeout(() => {
          if (window.location.pathname === '/') {
            setIconActive('filtre');
          }
          window.setTimeout(() => {
            if (window.location.pathname === '/') {
              setIconActive('transport');
            }
            window.setTimeout(() => {
              if (window.location.pathname === '/') {
                setIconActive('ajout');
              }
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
    window.setInterval(() => {
      if (window.location.pathname === '/') {
        setIconActive('graine');
      }
      window.setTimeout(() => {
        if (window.location.pathname === '/') {
          setIconActive('concassage');
        }
        window.setTimeout(() => {
          if (window.location.pathname === '/') {
            setIconActive('brassage');
          }
          window.setTimeout(() => {
            if (window.location.pathname === '/') {
              setIconActive('filtre');
            }
            window.setTimeout(() => {
              if (window.location.pathname === '/') {
                setIconActive('transport');
              }
              window.setTimeout(() => {
                if (window.location.pathname === '/') {
                  setIconActive('ajout');
                }
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 12000);
  }, []);

  return (
    <div className="Reuse">
      <h2 className="Reuse-title Reuse-title-font w900">
        <Trans components={{ span: <span />, br: <br /> }}>reuse_title</Trans>
      </h2>
      <div className="Reuse-dreches-wrap">
        <img id="drechesGraine" className={`${iconActive === 'graine' ? 'activeIcon drechesIcon' : 'drechesIcon'}`} src={`/assets/dreches/${iconActive === 'graine' ? 'graineColor' : 'graine'}.png`} alt="graine" />
        <img className="drechesArrow drechesArrowRight" src="/assets/dreches/arrowRight.svg" alt="drechesArrowRight" />
        <img id="drechesConcassage" className={`${iconActive === 'concassage' ? 'activeIcon drechesIcon' : 'drechesIcon'}`} src={`/assets/dreches/${iconActive === 'concassage' ? 'concassageColor' : 'concassage'}.png`} alt="concassage" />
        <img className="drechesArrowBackLeft" src="/assets/dreches/arrowBackLeft.svg" alt="drechesArrowBackLeft" />
        <img id="drechesBrassage" className={`${iconActive === 'brassage' ? 'activeIcon drechesIcon' : 'drechesIcon'}`} src={`/assets/dreches/${iconActive === 'brassage' ? 'brassageColor' : 'brassage'}.png`} alt="brassage" />
        <img className="drechesArrow drechesArrowLeft" src="/assets/dreches/arrowLeft.svg" alt="drechesArrowLeft" />
        <img id="drechesFiltre" className={`${iconActive === 'filtre' ? 'activeIcon drechesIcon' : 'drechesIcon'}`} src={`/assets/dreches/${iconActive === 'filtre' ? 'filtreColor' : 'filtre'}.png`} alt="filtre" />
        <img className="drechesArrowBackRight" src="/assets/dreches/arrowBackRight.svg" alt="drechesArrowBackRight" />
        <img id="drechesTransport" className={`${iconActive === 'transport' ? 'activeIcon drechesIcon' : 'drechesIcon'}`} src={`/assets/dreches/${iconActive === 'transport' ? 'transportColor' : 'transport'}.png`} alt="transport" />
        <img className="drechesArrow drechesArrowRight" src="/assets/dreches/arrowRight.svg" alt="drechesArrowRight" />
        <img id="drechesAjout" className={`${iconActive === 'ajout' ? 'activeIcon drechesIcon' : 'drechesIcon'}`} src={`/assets/dreches/${iconActive === 'ajout' ? 'ajoutColor' : 'ajout'}.png`} alt="ajout" />
      </div>
      <div className="Reuse-stats">
        <div className="Reuse-stat">
          <p className="Reuse-stat-little"><Trans components={{ span: <span /> }}>reuse_stat_left</Trans></p>
        </div>
        {/* <div className="Reuse-stat">
          <p className="Reuse-stat-little"><Trans components={{ span: <span /> }}>reuse_stat_right</Trans></p>
        </div> */}
      </div>
    </div>
  );
  /* return (
    <div className="Reuse">
      <h2 className="Reuse-title Reuse-title-font w900">
        <Trans components={{ span: <span />, br: <br /> }}>reuse_title</Trans>
      </h2>
      <div className="Reuse-infographie-wrap">
        <img id="infographieCircleArrow" src="/assets/infographie/circleArrowColor.svg" alt="circleArrowColor" />
        <img id="infographieProduction" className={`${iconActive === 'production' ? 'activeIcon infographieIcon centerIcon' : 'infographieIcon centerIcon'}`} src={`/assets/infographie/${iconActive === 'production' ? 'productionColor' : 'production'}.svg`} alt="production" />
        <img id="infographieTopRightTrait" className="infographieTrait" src="/assets/infographie/topRightTrait.svg" alt="infographieTopRightTrait" />
        <img id="infographieLivraison" className={`${iconActive === 'livraison' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'livraison' ? 'livraisonColor' : 'livraison'}.svg`} alt="livraison" />
        <img id="infographieRightTrait" className="infographieTrait" src="/assets/infographie/rightTrait.svg" alt="infographieRightTrait" />
        <img id="infographieConsommation" className={`${iconActive === 'consommation' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'consommation' ? 'consommationColor' : 'consommation'}.svg`} alt="consommation" />
        <img id="infographieBottomRightTrait" className="infographieTrait" src="/assets/infographie/bottomRightTrait.svg" alt="infographieBottomRightTrait" />
        <img id="infographieCollecte" className={`${iconActive === 'collecte' ? 'activeIcon infographieIcon centerIcon' : 'infographieIcon centerIcon'}`} src={`/assets/infographie/${iconActive === 'collecte' ? 'collecteColor' : 'collecte'}.svg`} alt="collecte" />
        <img id="infographieBottomLeftTrait" className="infographieTrait" src="/assets/infographie/bottomLeftTrait.svg" alt="infographieBottomLeftTrait" />
        <img id="infographieVerification" className={`${iconActive === 'verification' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'verification' ? 'verificationColor' : 'verification'}.svg`} alt="verification" />
        <img id="infographieLeftTrait" className="infographieTrait" src="/assets/infographie/leftTrait.svg" alt="infographieLeftTrait" />
        <img id="infographieLavage" className={`${iconActive === 'lavage' ? 'activeIcon infographieIcon' : 'infographieIcon'}`} src={`/assets/infographie/${iconActive === 'lavage' ? 'lavageColor' : 'lavage'}.svg`} alt="lavage" />
        <img id="infographieTopLeftTrait" className="infographieTrait" src="/assets/infographie/topLeftTrait.svg" alt="infographieTopLeftTrait" />
      </div>
      <div className="Reuse-stats">
        <div className="Reuse-stat">
          <p className="Reuse-stat-little"><Trans components={{ span: <span /> }}>reuse_stat_left</Trans></p>
        </div>
        <div className="Reuse-stat">
          <p className="Reuse-stat-little"><Trans components={{ span: <span /> }}>reuse_stat_right</Trans></p>
        </div>
      </div>
      <div className="Reuse-creation">
        <p className="Reuse-creation-little"><Trans components={{ span: <span />, br: <br /> }}>reuse_creation</Trans></p>
      </div>
    </div>
  ); */
};

export default Reuse;
