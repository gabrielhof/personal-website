import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';

export default class ContactList extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: 'contact-list'
  }

  render() {
    return (
      <div className={this.props.className}>
        <ul className="links">
          <li>
            <ExternalLink up to="https://github.com/gabrielhof/">
              <Icon>github</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink up to="https://linkedin.com/in/gabrielhof/">
              <Icon>linkedin</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink up to="https://twitter.com/gabriel_hof/">
              <Icon>twitter</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink up to="https://instagram.com/gabriel.hoff/">
              <Icon>instagram</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink up to="https://facebook.com/gabrielhof/">
              <Icon>facebook</Icon>
            </ExternalLink>
          </li>
        </ul>
      </div>
    );
  }
}
