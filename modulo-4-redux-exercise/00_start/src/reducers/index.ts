import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import { memberFilterReducer, orgState } from './memberFilterReducer';


export interface State {  
  memberReducer : memberState;
  memberFilterReducer: orgState
};

export const reducers = combineReducers<State>({
  memberReducer, memberFilterReducer
});
