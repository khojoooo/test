import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu>
      <Link route="/">
        <a className="item">
          Safe registered mail
        </a>
      </Link>
    </Menu>
  );
};
