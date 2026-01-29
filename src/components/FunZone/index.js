/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation, Trans } from 'react-i18next';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
/* import FormHelperText from '@mui/material/FormHelperText'; */
import Popup from 'reactjs-popup';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
    fontSize: '20px',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#d6bc78',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#d6bc78',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#d6bc78',
    },
    '& input.inputValid + fieldset': {
      borderColor: 'green',
      borderWidth: 3,
    },
    '& input.inputUnvalid + fieldset': {
      borderColor: 'red',
      borderWidth: 3,
    },
    '& input': {
      color: 'white',
      fontSize: '20px',
    },
    '& input::placeholder': {
      fontSize: '20px',
    },
  },
  '@media screen and (max-width: 767px)': {
    '& label': {
      fontSize: '13px',
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        fontSize: '13px',
      },
      '& input::placeholder': {
        fontSize: '13px',
      },
    },
  },
});

const StyledPopup = styled(Popup)`
  &-content {
    padding: 0px;
    border: 0px;
    @media screen and (max-width: 767px) {
      width: 90vw;
    }
    .SuccessPopup-modal {
      background-color: #860101;
      .SuccessPopup-header {
        width: 100%;
        color: white;
        font-size: 30px;
        text-align: center;
        letter-spacing: 3px;
        padding: 20px 0px;
        @media screen and (max-width: 767px) {
          font-size: 22px;
        }
      }

      .SuccessPopup-content {
        padding: 20px 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .SuccessPopup-inputs {
          width: 100%;
          div:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }

      .SuccessPopup-modal-closeBtn {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -10px;
        top: -10px;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: 0px;
      }
    }
  }
`;

const FunZone = ({
  prenomValue, nomValue, emailValue, telValue, handleChangeInput, successFormFunZone, displayPopup,
}) => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    handleChangeInput(e.target.name, e.target.value, 'funZone_form');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    successFormFunZone(true);
  };

  return (
    <>
      {/* { displayPopup === true && <Popup />} */}
      <StyledPopup open={displayPopup} closeOnDocumentClick onClose={() => successFormFunZone(false)}>
        <div className="SuccessPopup-modal">
          <button className="SuccessPopup-modal-closeBtn" onClick={() => successFormFunZone(false)} type="button">
            &times;
          </button>
          <div className="SuccessPopup-header">
            <p className="w900">Félicitations !</p>
          </div>
          <div className="SuccessPopup-content">
            <p>Votre participation a bien été enregistré.</p>
          </div>
        </div>
      </StyledPopup>
      <section className="FunZone" id="fun-zone">
        <div className="FunZone-left">
          <div className="FunZone-left-text">
            <h3 className="FunZone-left-title yellow w900">{t('funzone_title_yellow')}</h3>
            <h3 className="FunZone-left-desc w900">{t('funzone_title_white')}</h3>
          </div>
          <img className="FunZone-left-illu" src="/assets/coffret-simu.png" alt="coffret simu" />
        </div>
        <div className="FunZone-right">
          <p className="FunZone-right-title w900">{t('funzone_fillform')}</p>
          <div className="FunZone-right-form">
            <form data-netlify="true" method="POST" autoComplete="off" id="FunZoneForm" name="FunZoneForm">
              <input type="hidden" name="form-name" value="FunZoneForm" />
              <div className="FunZone-right-form-input-container">
                <CssTextField name="prenomValue" onChange={(e) => handleChange(e)} value={prenomValue} inputProps={{ className: '' }} fullWidth required label={t('funzone_prenom_label')} id="FunZone-TextField-Prenom" />
                {/* <FormHelperText id="component-helper-text">
              Some important helper text
              </FormHelperText> */}
              </div>
              <div className="FunZone-right-form-input-container">
                <CssTextField name="nomValue" onChange={(e) => handleChange(e)} value={nomValue} inputProps={{ className: '' }} fullWidth required label={t('funzone_nom_label')} id="FunZone-TextField-Nom" />
              </div>
              <div className="FunZone-right-form-input-container">
                <CssTextField name="emailValue" onChange={(e) => handleChange(e)} value={emailValue} type="email" inputProps={{ className: '' }} fullWidth required label={t('funzone_email_label')} id="FunZone-TextField-Email" />
              </div>
              <div className="FunZone-right-form-input-container">
                <CssTextField name="telValue" onChange={(e) => handleChange(e)} value={telValue} type="tel" inputProps={{ className: '' }} fullWidth required label={t('funzone_tel_label')} id="FunZone-TextField-Tel" />
              </div>
              <input className="FunZone-right-submit-button w900" type="submit" value={t('funzone_sumbit_button')} />
            </form>
          </div>
          <div className="FunZone-right-submit">
            <p className="FunZone-right-submit-button-rules w900"><u><NavLink to="reglement-du-jeu" exact>{t('funzone_rules')}</NavLink></u></p>
            <p className="FunZone-right-submit-button-note"><Trans components={{ u: <u />, NavLink: <NavLink /> }}>funzone_details</Trans></p>
          </div>
        </div>
      </section>
    </>
  );
};

FunZone.propTypes = {
  prenomValue: PropTypes.string.isRequired,
  nomValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  telValue: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  successFormFunZone: PropTypes.func.isRequired,
  displayPopup: PropTypes.bool.isRequired,
};

export default FunZone;
