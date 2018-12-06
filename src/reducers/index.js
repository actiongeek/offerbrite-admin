import { combineReducers } from 'redux';
import { reducer as sessionReducer } from './session';
import { reducer as requestReducer } from './request';
import { reducer as usersReducer } from './users';
import { reducer as companiesReducer } from './companies';
import { reducer as offersReducer } from './offers';
import { reducer as settingsReducer } from './settings';
import { reducer as adminsReducer } from './admins';
import { reducer as reportsReducer } from './reports';

export default combineReducers({
  session: sessionReducer,
  request: requestReducer,
  users: usersReducer,
  companies: companiesReducer,
  offers: offersReducer,
  settings: settingsReducer,
  admins: adminsReducer,
  reports: reportsReducer,
});
