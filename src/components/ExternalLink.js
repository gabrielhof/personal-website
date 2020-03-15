import React from 'react';
import PropTypes from 'prop-types';

export default class HeroSection extends React.PureComponent {

  static propTypes = {
    to: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    newTab: true
  }

  render() {
    const {to, newTab, className, children} = this.props;

    const aProps = {};

    if (newTab) {
      aProps.target = '_blank';
      aProps.rel = 'noopener noreferrer';
    }

    return (
      <a
        {...aProps}
        href={to}
        className={className}
      >
        {children}
      </a>
    );
  }
}
