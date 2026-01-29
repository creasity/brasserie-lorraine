export const SET_MENU_OPEN = 'SET_MENU_OPEN';
export const SET_PLAYER_OPEN = 'SET_PLAYER_OPEN';
export const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT';
export const HANDLE_CHANGE_INPUT_FILTER = 'HANDLE_CHANGE_INPUT_FILTER';
export const HANDLE_KEYDOWN_INPUT_FILTER = 'HANDLE_KEYDOWN_INPUT_FILTER';
export const SUBMIT_FILTER = 'SUBMIT_FILTER';
export const RESET_GSAP = 'RESET_GSAP';
export const SUCCESS_FORM_FUN_ZONE = 'SUCCESS_FORM_FUN_ZONE';
export const INIT_LANG = 'INIT_LANG';

export const setMenuOpen = (menuOpen) => ({
  type: SET_MENU_OPEN,
  menuOpen,
});

export const setPlayerOpen = (playerOpen, video) => ({
  type: SET_PLAYER_OPEN,
  playerOpen,
  video,
});

export const handleChangeInput = (fieldName, fieldValue, section) => ({
  type: HANDLE_CHANGE_INPUT,
  fieldName,
  fieldValue,
  section,
});

export const submitFilter = () => ({
  type: SUBMIT_FILTER,
});

export const handleChangeInputFilter = (fieldName, fieldValue) => ({
  type: HANDLE_CHANGE_INPUT_FILTER,
  fieldName,
  fieldValue,
});

export const handleKeyDownInputFilter = (fieldName, code) => ({
  type: HANDLE_KEYDOWN_INPUT_FILTER,
  fieldName,
  code,
});

export const resetGsap = (displayFilter) => ({
  type: RESET_GSAP,
  displayFilter,
});

export const successFormFunZone = (display) => ({
  type: SUCCESS_FORM_FUN_ZONE,
  display,
});

export const initLang = () => ({
  type: INIT_LANG,
});
