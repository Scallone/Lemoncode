import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'
import { State } from '../../reducers'

interface Props {
  members: Array<MemberEntity>;
  orgName: string;
  loadMembers: () => any;
  onChange: (name:string) => void;
}

export class MemberAreaComponent extends React.Component<Props, State> {
  render() {
  return (
  <div>
      <MemberTableComponent members={this.props.members}/>
      <br/>
      <label>Organization Name:</label>
      <input
        value={this.props.orgName}
        onChange={(e: any) => this.props.onChange(e.target.value)}
        />
      <input type="submit"
              value="load"
              className="btn btn-default"
              onClick={() => this.props.loadMembers()}
      />
  </div>
  );
  }
}
