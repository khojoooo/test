import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';

class MailIndex extends Component {
  static async getInitialProps(){ //157lecture
    const mails = await factory.methods.getDeployedMails().call();

    return { mails: mails};
  }

  render(){
    return(
      <Layout>
        <Button.Group>
          <Button>사용자</Button>
          <Button.Or />
          <Button>관리자</Button>
        </Button.Group>
      </Layout>
    );
  }
}

export default MailIndex;
