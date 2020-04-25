import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';

const links = [
  {
    name: 'github',
    url: 'https://github.com/gabrielhof/'
  },
  {
    name: 'linkedin',
    url: 'ttps://linkedin.com/in/gabrielhof/'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/gabriel_hof/'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/gabriel.hoff/'
  },
  {
    name: 'facebook',
    url: 'https://facebook.com/gabrielhof/'
  }
];

export default class ContactList extends React.PureComponent {

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    id: 'contact-list',
    className: 'contact-list'
  }

  render() {
    const {id, className} = this.props;

    return (
      <div className={className}>
        <ul className="links">
          {links.map(link => (
            <li key={link.name}>
              <ExternalLink id={`${id}-${link.name}-link`} up to={link.url}>
                <Icon>{link.name}</Icon>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
