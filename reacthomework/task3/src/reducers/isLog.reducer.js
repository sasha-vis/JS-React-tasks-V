import { CHANGE_BUTTON } from './../constants/isLog.constants';

let defaultData;

if (localStorage.getItem('isLog') === null) {
  defaultData = { isLog: true }
  localStorage.setItem('isLog', JSON.stringify(defaultData));
} else {
defaultData = { isLog: JSON.parse(localStorage.getItem('isLog')).isLog }
}

export default (state = defaultData, action) => {
  switch (action.type) {
      case CHANGE_BUTTON:
              let value;
              if (state.isLog === false) {
                value = true;
              } else {
                value = false;
              }

              localStorage.setItem('isLog', JSON.stringify({ isLog: value }));
              return ({
                ...state,
                isLog: value
              });
      default:
          return state;
  }
};