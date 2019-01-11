import { connect } from 'react-redux';
import { memberRequest, updateOrgName } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer,
      orgName: state.memberFilterReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (orgName : string) => {return dispatch(memberRequest(orgName))},
    onChange: (orgName : string) => dispatch(updateOrgName(orgName))
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
