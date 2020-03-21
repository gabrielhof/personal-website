import React from 'react';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';

export default class ContactList extends React.PureComponent {
  render() {
    return (
      <div className="contact-list">
        <ul className="links">
          <li>
            <ExternalLink to="https://github.com/gabrielhof/">
              <Icon>github</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://linkedin.com/in/gabrielhof/">
              <Icon>linkedin</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://twitter.com/gabriel_hof/">
              <Icon>twitter</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://instagram.com/gabriel.hoff/">
              <Icon>instagram</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://facebook.com/gabrielhof/">
              <Icon>facebook</Icon>
            </ExternalLink>
          </li>
        </ul>
      </div>
    );
  }
}
