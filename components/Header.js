import React from 'react';
import { Header, Segment} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
  <Segment inverted>
    <Header as='h1' inverted color='white' textAlign='center' size='huge' style={{ marginTop: '50px', height:'100px'}}>
      <font size="20" >
        <Link route="/">
          <a className="item">
            Safe registered mail
          </a>
        </Link>
      </font>
   </Header>
  </Segment>
 );
};
