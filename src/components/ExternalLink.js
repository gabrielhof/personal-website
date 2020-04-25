import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ExternalLink extends React.PureComponent {

  static propTypes = {
    to: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    up: PropTypes.bool,
    underlined: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    up: false,
    underlined: false,
    newTab: true
  }

  render() {
    const {to, newTab, up, underlined, className, children, ...rest} = this.props;

    const aProps = {};

    if (newTab) {
      aProps.target = '_blank';
      aProps.rel = 'noopener noreferrer';
    }

    return (
      <a
        {...rest}
        {...aProps}
        href={to}
        className={classNames(className, {
          up,
          underlined
        })}
      >
        {children}
      </a>
    );
  }
}
