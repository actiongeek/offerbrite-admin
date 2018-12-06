import types from './types';

const initialState = {
  companiesList: [],
  params: {
    limit: 100,
    skip: 0,
  },
  filteredData: null,
  selectedCategory: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMPANIES_SUCCESS:
      return { ...state, companiesList: action.payload.companiesList };

    case types.FILTER_COMPANIES_BY_CATEGORY:
      const { reason, filteredData } = action.payload;
      return {
        ...state,
        selectedCategory: reason,
        filteredData,
      };

    case types.FILTER_COMPANIES_BY_SEARCH:
      return {
        ...state,
        filteredData: action.payload.filteredData,
      };

    case types.TURN_OFF_COMPANIES_FILTER:
      return {
        ...state,
        filteredData: null,
        selectedCategory: '',
      };

    default:
      return state;
  }
};
