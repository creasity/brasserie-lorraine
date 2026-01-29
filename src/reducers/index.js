/* eslint-disable radix */
import {
  SET_MENU_OPEN,
  SET_PLAYER_OPEN,
  HANDLE_CHANGE_INPUT,
  SUBMIT_FILTER,
  HANDLE_CHANGE_INPUT_FILTER,
  HANDLE_KEYDOWN_INPUT_FILTER,
  RESET_GSAP,
  SUCCESS_FORM_FUN_ZONE,
  INIT_LANG,
} from '../actions';
import translation from '../assets/lang';

const initialState = {
  isInitLang: false,
  menuOpen: false,
  playerOpen: false,
  currentVideo: 'manifesto',
  funZone_form: {
    prenomValue: '',
    nomValue: '',
    emailValue: '',
    telValue: '',
    pop_up: false,
  },
  filter: {
    displayFilter: true,
    submitButtonON: false,
    first: '',
    second: '',
    third: '',
    fourth: '',
    indication: 'Inscrivez votre année de naissance',
  },
  contact: {
    nomValue: '',
    prenomValue: '',
    objetValue: '',
    messageValue: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: action.menuOpen,
      };
    case SET_PLAYER_OPEN:
      return {
        ...state,
        playerOpen: action.playerOpen,
        currentVideo: action.video,
      };
    case HANDLE_CHANGE_INPUT: {
      switch (action.section) {
        case 'funZone_form':
          return {
            ...state,
            funZone_form: {
              ...state.funZone_form,
              [action.fieldName]: action.fieldValue,
            },
          };
        case 'contact':
          return {
            ...state,
            contact: {
              ...state.contact,
              [action.fieldName]: action.fieldValue,
            },
          };
        default:
          return { ...state };
      }
    }
    case SUBMIT_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          displayFilter: false,
        },
      };
    case HANDLE_CHANGE_INPUT_FILTER: {
      const {
        first, second, third, fourth,
      } = state.filter;
      const currentInputs = [first, second, third, fourth];
      const mapBirthYear = [];
      currentInputs.forEach((input) => {
        mapBirthYear.push(input);
      });
      if (Number.isNaN(parseInt(action.fieldValue))) {
        return { ...state };
      }
      let newValue = '';
      if (action.fieldValue.length === 2) {
        newValue = action.fieldValue.substr(action.fieldValue.length - 1);
      }
      else {
        newValue = action.fieldValue;
      }

      switch (action.fieldName) {
        case 'first':
          mapBirthYear[0] = newValue;
          document.getElementById('filterSecondInput').focus();
          break;
        case 'second':
          mapBirthYear[1] = newValue;
          document.getElementById('filterThirdInput').focus();
          break;
        case 'third':
          mapBirthYear[2] = newValue;
          document.getElementById('filterFourthInput').focus();
          break;
        case 'fourth':
          mapBirthYear[3] = newValue;
          break;
        default:
          break;
      }

      let birthYear = '';
      const currentYear = new Date().getFullYear();
      let isSubmitButtonON = false;
      let newIndication = translation.fr.filter_indication_default;
      mapBirthYear.forEach((element) => {
        birthYear += element;
      });
      if (currentYear - birthYear >= 19 && birthYear.length === 4) {
        isSubmitButtonON = true;
      }
      if (!isSubmitButtonON && birthYear.length === 4) {
        newIndication = translation.fr.filter_indication_error;
      }
      if (birthYear.length !== 4) {
        newIndication = translation.fr.filter_indication_default;
      }

      return {
        ...state,
        filter: {
          ...state.filter,
          submitButtonON: isSubmitButtonON,
          [action.fieldName]: newValue,
          indication: newIndication,
        },
      };
    }
    case HANDLE_KEYDOWN_INPUT_FILTER: {
      const {
        first, second, third, fourth,
      } = state.filter;
      let newInputValue = '';

      if (action.code === 'Backspace' || action.code === 'Delete') {
        switch (action.fieldName) {
          case 'first':
            newInputValue = first.slice(0, -1);
            break;
          case 'second':
            if (second.length === 0) {
              document.getElementById('filterFirstInput').focus();
            }
            else {
              newInputValue = second.slice(0, -1);
            }
            break;
          case 'third':
            if (third.length === 0) {
              document.getElementById('filterSecondInput').focus();
            }
            else {
              newInputValue = third.slice(0, -1);
            }
            break;
          case 'fourth':
            if (fourth.length === 0) {
              document.getElementById('filterThirdInput').focus();
            }
            else {
              newInputValue = fourth.slice(0, -1);
            }
            break;
          default:
            break;
        }
      }

      return {
        ...state,
        filter: {
          ...state.filter,
          [action.fieldName]: newInputValue,
        },
      };
    }
    case RESET_GSAP: {
      return {
        ...state,
        filter: {
          ...state.filter,
          displayFilter: action.displayFilter,
        },
      };
    }
    case SUCCESS_FORM_FUN_ZONE: {
      return {
        ...state,
        funZone_form: {
          ...state.funZone_form,
          prenomValue: '',
          nomValue: '',
          emailValue: '',
          telValue: '',
          pop_up: action.display,
        },
      };
    }
    case INIT_LANG: {
      return {
        ...state,
        isInitLang: true,
        filter: {
          ...state.filter,
          indication: translation.fr.filter_indication_default,
        },
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
