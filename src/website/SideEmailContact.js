import React from 'react';
import ExternalLink from 'src/components/ExternalLink';

export default class SideContactEmail extends React.PureComponent {
  render() {
    return (
      <div className="side-contact-email">
        <div className="email-container">
          <ExternalLink to="mailto:gabrielhof@gmail.com" up>
            gabrielhof@gmail.com
          </ExternalLink>
        </div>
      </div>
    );
  }
}
