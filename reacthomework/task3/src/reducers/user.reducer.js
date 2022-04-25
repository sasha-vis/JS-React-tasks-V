import { CONFIRM_PROFILE } from "./../constants/user.constants";

let defaultData = { }

if (localStorage.getItem('users') === null) {
    defaultData = { usersArray: require('./../json/user.json') }
    localStorage.setItem('users', JSON.stringify(defaultData));
} else {
  defaultData = { usersArray: JSON.parse(localStorage.getItem('users')).usersArray }
}

export default (state = defaultData, action) => {
    switch (action.type) {
        case CONFIRM_PROFILE:
            localStorage.setItem('users', JSON.stringify({ usersArray: state.usersArray.map(el => el.id == action.data.id ? action.data : el) }));
            return ({
              ...state,
              usersArray: state.usersArray.map(el => el.id == action.data.id ? action.data : el)
            });
        default:
            return state;
    }
};