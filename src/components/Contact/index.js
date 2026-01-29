/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { styled as materialStyled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useTranslation } from 'react-i18next';
/* import FormHelperText from '@mui/material/FormHelperText'; */

const CssTextField = materialStyled(TextField)({
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
    '& textarea': {
      color: 'white',
      fontSize: '20px',
    },
    '& textarea::placeholder': {
      fontSize: '20px',
    },
  },
  '@media screen and (max-width: 767px)': {
    '& label': {
      fontSize: '15px',
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        fontSize: '15px',
      },
      '& input::placeholder': {
        fontSize: '15px',
      },
      '& textarea': {
        fontSize: '15px',
      },
      '& textarea::placeholder': {
        fontSize: '15px',
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
    .Contact-modal {
      background-color: #860101;
      .Contact-header {
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

      .Contact-content {
        padding: 20px 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        .Contact-inputs {
          width: 100%;
          div:not(:last-child) {
            margin-bottom: 20px;
          }
        }
        .Contact-submitBtn {
          width: 207px;
          height: 59px;
          background-color: #fff;
          border: none;
          color: #cc221d;
          transition: 0.2s ease-in-out;
          box-shadow: 0px 4px 18px rgb(0 0 0 / 58%);
          font-size: 27px;
          margin-top: 20px;
        }

        .Contact-submitBtn:hover {
          background-color: #d6bc78;
          transition: 0.2s ease-in-out;
        }

        .Contact-messageSent {
          margin-top: 20px;
        }
        p {
          text-align: center;
          margin-top: 20px;
          font-size: 18px;
        }
      }

      .Contact-modal-closeBtn {
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
    ${'' /* @media screen and (max-width: ${breakpoints.md}) {
            width: 400px;
        }
    @media screen and (max-width: ${breakpoints.xs}) {
            width: 300px;
        } */}
  }
`;

const Contact = ({
  prenomValue, nomValue, objetValue, messageValue, handleChangeInput,
}) => {
  const { t } = useTranslation('');
  /* const [messageSent, setMessageSent] = useState(false); */
  /* const handleSubmit = (evt) => {
    evt.preventDefault();
    setMessageSent(true);
  }; */

  /* const handleChange = (e) => {
    handleChangeInput(e.target.name, e.target.value, 'contact');
  }; */

  return (
    <StyledPopup
      trigger={<button type="button" className="Contact-btn w900">{t('contact_trigger')}</button>}
      modal
      nested
      className="Contact"
    >
      {(close) => (
        <div className="Contact-modal">
          <button className="Contact-modal-closeBtn" onClick={close} type="button">
            &times;
          </button>
          <div className="Contact-header">
            <p className="w900">{t('contact_title')}</p>
          </div>
          <div className="Contact-content">
            {/* <form className="Contact-inputs" onSubmit={(e) => handleSubmit(e)} autoComplete="off" id="ContactForm" name="ContactForm">
              <CssTextField name="nomValue" onChange={(e) => handleChange(e)} value={nomValue} inputProps={{ className: '' }} fullWidth required label="Nom" id="Contact-TextField-Nom" />
              <CssTextField name="prenomValue" onChange={(e) => handleChange(e)} value={prenomValue} inputProps={{ className: '' }} fullWidth required label="Prénom" id="Contact-TextField-Prenom" />
              <CssTextField name="objetValue" onChange={(e) => handleChange(e)} value={objetValue} inputProps={{ className: '' }} fullWidth required label="Objet" id="Contact-TextField-Objet" />
              <CssTextField name="messageValue" onChange={(e) => handleChange(e)} value={messageValue} inputProps={{ className: '' }} fullWidth required label="Message" id="Contact-TextField-Message" multiline rows={4} />
            </form>
            {
              !messageSent && (
                <button className="Contact-submitBtn w900" type="submit" form="ContactForm">ENVOYER</button>
              )
            }
            {
              messageSent && (
                <p className="Contact-messageSent w900">Votre message a bien été envoyé.</p>
              )
            } */}
            <p>{t('contact_P1')}</p>
            <p>{t('contact_P2')}</p>
          </div>
        </div>
      )}
    </StyledPopup>
  );
};

Contact.propTypes = {
  nomValue: PropTypes.string.isRequired,
  prenomValue: PropTypes.string.isRequired,
  objetValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};

export default Contact;
