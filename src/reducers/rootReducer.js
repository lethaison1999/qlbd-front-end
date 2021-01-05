import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { clubsReducer } from './clubs';
import { matchesReducer } from './matches';
import { seasonsReducer } from './seasons';

export const rootReducer = combineReducers({
  auth: authReducer,
  clubs: clubsReducer,
  matches: matchesReducer,
  seasons: seasonsReducer
});
