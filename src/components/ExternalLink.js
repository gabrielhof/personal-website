import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class HeroSection extends React.PureComponent {

  static propTypes = {
    to: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    underlined: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    underlined: false,
    newTab: true
  }

  render() {
    const {to, newTab, underlined, className, children} = this.props;

    const aProps = {};

    if (newTab) {
      aProps.target = '_blank';
      aProps.rel = 'noopener noreferrer';
    }

    return (
      <a
        {...aProps}
        href={to}
        className={classNames(className, {
          underlined
        })}
      >
        {children}
      </a>
    );
  }
}
