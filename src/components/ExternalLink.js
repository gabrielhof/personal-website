import React from 'react';
import PropTypes from 'prop-types';

export default class HeroSection extends React.PureComponent {

  static propTypes = {
    to: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    children: PropTypes.node
  }

  static defaultProps = {
    newTab: true
  }

  render() {
    const {to, newTab, children} = this.props;

    const aProps = {};

    if (newTab) {
      aProps.target = '_blank';
      aProps.rel = 'noopener noreferrer';
    }

    return (
      <a href={to} {...aProps}>
        {children}
      </a>
    );
  }
}
