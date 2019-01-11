import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';
import { memberAPI } from '../api/member';
import { State } from '../reducers/index';

export const memberRequestCompleted = (members: MemberEntity[]) => {
  return {
    type: actionsEnums.MEMBER_REQUEST_COMPLETED,
    payload: members
  }
}

export const memberRequest = (orgName) => (dispatcher) => {
  const promise = memberAPI.getAllMembers(orgName);

  promise.then(
    (data) => dispatcher(memberRequestCompleted(data))
  );

  return promise;
}

export const updateOrgName = (newName : string) => ({  
  type: actionsEnums.ORG_NAME_UPDATED,
  payload : newName,  
});
