import types from './types';

const initialState = {
  title: '',
  message: '',
  selectedCountry: 'All',
  countries: [],
  selectedCategory: 'All',
  categories: [],
  date: new Date(),
  time: new Date(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_INITIAL_COUNTRIES:
      return {
        ...state,
        countries: ['All', ...action.payload.countries],
      };

    case types.SET_INITIAL_CATEGORIES:
      return {
        ...state,
        categories: ['All', ...action.payload.categories],
      };

    case types.ON_CHANGE_NOTIFICATION_TEXT:
      return {
        ...state,
        [action.payload.fieldTitle]: action.payload.text,
      };

    case types.ON_CHANGE_NOTIFICATION_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload.country,
      };

    case types.ON_CHANGE_NOTIFICATION_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.category,
      };

    case types.ON_CHANGE_NOTIFICATION_DATE:
      return {
        ...state,
        date: action.payload.date,
      };

    case types.ON_CHANGE_NOTIFICATION_TIME:
      return {
        ...state,
        time: action.payload.time,
      };

    default:
      return state;
  }
};
