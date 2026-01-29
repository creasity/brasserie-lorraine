import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Filter = ({
  submitButtonON,
  submitFilter,
  filterFirstNumValue,
  filterSecondNumValue,
  filterThirdNumValue,
  filterFourthNumValue,
  handleChangeInputFilter,
  handleKeyDownInputFilter,
  indication,
  displayFilter,
}) => {
  const { t } = useTranslation();
  const [whichInputFocused, setWhichInputFocused] = useState('none');

  const handleChange = (fieldName, fieldValue) => {
    handleChangeInputFilter(fieldName, fieldValue);
  };
  const handleKeyDown = (fieldName, code) => {
    if (code === 'Backspace' || code === 'Delete') {
      handleKeyDownInputFilter(fieldName, code);
    }
  };

  const inputFocus = (inputName) => {
    setWhichInputFocused(inputName);
  };

  return (
    <div className={displayFilter ? 'Filter' : 'Filter Filter-off'}>
      <img className="Filter-background" src="/assets/filter-background.png" alt="Arrière plan" />
      <div className="Filter-wrap">
        <img className="Filter-logo" src="/assets/logo.png" alt="logo" />
        <p className="Filter-slogan w900 text-shadow">{t('filter_slogan_firstP')}{/* <br />{t('filter_slogan_secondP')} */}</p>
        <div className="Filter-inputs">
          <input inputMode="numeric" autoComplete="off" id="filterFirstInput" value={filterFirstNumValue} onChange={(e) => handleChange(e.target.name, e.target.value)} onKeyDown={(e) => handleKeyDown(e.target.name, e.code)} onFocus={() => inputFocus('first')} onBlur={() => setWhichInputFocused('none')} name="first" className={whichInputFocused === 'first' ? 'Filter-input Filter-input-focused yellow w900' : 'Filter-input yellow w900'} type="text" />
          <input inputMode="numeric" autoComplete="off" id="filterSecondInput" value={filterSecondNumValue} onChange={(e) => handleChange(e.target.name, e.target.value)} onKeyDown={(e) => handleKeyDown(e.target.name, e.code)} onFocus={() => inputFocus('second')} onBlur={() => setWhichInputFocused('none')} name="second" className={whichInputFocused === 'second' ? 'Filter-input Filter-input-focused yellow w900' : 'Filter-input yellow w900'} type="text" />
          <input inputMode="numeric" autoComplete="off" id="filterThirdInput" value={filterThirdNumValue} onChange={(e) => handleChange(e.target.name, e.target.value)} onKeyDown={(e) => handleKeyDown(e.target.name, e.code)} onFocus={() => inputFocus('third')} onBlur={() => setWhichInputFocused('none')} name="third" className={whichInputFocused === 'third' ? 'Filter-input Filter-input-focused yellow w900' : 'Filter-input yellow w900'} type="text" />
          <input inputMode="numeric" autoComplete="off" id="filterFourthInput" value={filterFourthNumValue} onChange={(e) => handleChange(e.target.name, e.target.value)} onKeyDown={(e) => handleKeyDown(e.target.name, e.code)} onFocus={() => inputFocus('fourth')} onBlur={() => setWhichInputFocused('none')} name="fourth" className={whichInputFocused === 'fourth' ? 'Filter-input Filter-input-focused yellow w900' : 'Filter-input yellow w900'} type="text" />
        </div>
        <p className="Filter-indication w900 blackred">{indication}<br/>VOUS DEVEZ ÊTRE MAJEUR POUR CONSULTER CE SITE</p>
        <button id="filterSubmitBtn" onClick={() => (submitButtonON ? submitFilter() : null)} type="button" className={submitButtonON ? 'Filter-submit-button ON w900' : 'Filter-submit-button OFF w900'}>{t('filter_enter_button')}</button>
      </div>

    </div>
  );
};

Filter.propTypes = {
  submitButtonON: PropTypes.bool.isRequired,
  submitFilter: PropTypes.func.isRequired,
  filterFirstNumValue: PropTypes.string.isRequired,
  filterSecondNumValue: PropTypes.string.isRequired,
  filterThirdNumValue: PropTypes.string.isRequired,
  filterFourthNumValue: PropTypes.string.isRequired,
  handleChangeInputFilter: PropTypes.func.isRequired,
  handleKeyDownInputFilter: PropTypes.func.isRequired,
  indication: PropTypes.string.isRequired,
  displayFilter: PropTypes.bool.isRequired,
};

export default Filter;
