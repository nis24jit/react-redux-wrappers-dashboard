import { combineReducers } from 'redux';
import { period } from './period';
import { issues } from './issues';
import { users } from './users';

export const issuesDashboard = combineReducers({period, issues, users});