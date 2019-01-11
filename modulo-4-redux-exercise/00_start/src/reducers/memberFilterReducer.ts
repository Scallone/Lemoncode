import {actionsEnums} from '../common/actionsEnums';


export interface orgState {
    orgName : string;
  }
  
  const defaultOrgState : () => orgState = () => ({
    orgName: 'lemoncode'
  });
  
  export const memberFilterReducer =  (state : orgState = defaultOrgState(), action) => {
   switch (action.type) {
     case actionsEnums.ORG_NAME_UPDATED:
       return handleOrgUpdateAction(state, action.payload);
   } 
    return state;
  };
  
   const handleOrgUpdateAction = (state : orgState, orgName) => {
     return {
       ...state,
       orgName,
     };
   }