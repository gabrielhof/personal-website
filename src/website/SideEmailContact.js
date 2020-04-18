import React from 'react';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';

export default class SideContactEmail extends React.PureComponent {
  render() {
    return (
      <div className="side-contact-email">
        <div className="email-container">
          <ExternalLink to="mailto:gabrielhof@gmail.com" up>
            <span className="email">gabrielhof@gmail.com</span>
            <Icon>email</Icon>
          </ExternalLink>
        </div>
      </div>
    );
  }
}
