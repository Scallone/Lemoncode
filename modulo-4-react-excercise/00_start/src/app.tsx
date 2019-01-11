import * as React from 'react';
import { MembersTableComponent } from './components';

interface Props {
}
interface State {
  orgName: string;
}

export class App extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);

    this.state = { orgName: 'lemoncode' };
  }

  setOrgNameState = (newOrg: string) => {
    this.setState({ orgName: newOrg });
  }
  public render() {
    return (
      <>
        <MembersTableComponent initialOrgName={this.state.orgName} onOrgChanged={this.setOrgNameState} />
      </>
    );
  }
}