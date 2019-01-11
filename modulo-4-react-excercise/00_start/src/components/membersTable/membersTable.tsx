import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import { } from 'core-js';
import { string } from 'prop-types';

interface Props {
  initialOrgName: string;
  onOrgChanged: (newName: string) => void;

}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>;
  editingOrg: string;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = { members: [], editingOrg: this.props.initialOrgName};
  }

  loadMembers = () => {
    this.props.onOrgChanged(this.state.editingOrg);
    memberAPI.getAllMembers(this.state.editingOrg).then((members) =>
      this.setState({ members: members })
    );
  }

  onChange = (event) => {
    this.setState({editingOrg: event.target.value});
  }


  public render() {

    return (
      <div className="row">
        <h2> Members Page</h2>
        <label>Update name of organization:</label>
      <input value={this.state.editingOrg} 
             onChange={this.onChange}/>
        <button onClick={this.loadMembers}>Load</button>
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}
