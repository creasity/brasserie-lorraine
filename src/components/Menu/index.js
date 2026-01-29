import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { enableScroll } from '../../utils/functions/disableScroll';

const Menu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();
  const onClickNavLink = (destination) => {
    enableScroll();
    setMenuOpen(false);
    window.setTimeout(() => {
      document.getElementById(destination).scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className={!menuOpen ? 'Menu' : 'Menu open'}>
      <div className="Menu-wrap">
        <div className="Menu-title">
          <a onClick={() => onClickNavLink('accueil')} className="Menu-title-font w900">{t('menu_title_accueil')}</a>
        </div>
        <div className="Menu-title">
          <a onClick={() => onClickNavLink('notre-adn')} className="Menu-title-font w900">{t('menu_title_adn')}</a>
        </div>
        <div className="Menu-title">
          <a onClick={() => onClickNavLink('nos-bieres')} className="Menu-title-font w900">{t('menu_title_bieres')}</a>
        </div>
        {/* <div className="Menu-title">
          <a onClick={() => onClickNavLink('fun-zone')} className="Menu-title-font w900">{t('menu_title_funzone')}</a>
        </div> */}
        <div className="Menu-title">
          <a onClick={() => onClickNavLink('notre-histoire')} className="Menu-title-font w900">{t('menu_title_histoire')}</a>
        </div>
        <div className="Menu-title">
          <a onClick={() => onClickNavLink('nos-valeurs')} className="Menu-title-font w900">{t('menu_title_valeurs')}</a>
        </div>

      </div>
    </div>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
