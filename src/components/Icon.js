import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends React.PureComponent {

  static propTypes = {
    children: PropTypes.oneOf([
      'location',
      'email',
      'github',
      'linkedin',
      'twitter',
      'instagram',
      'facebook',
      'tag',
      'gears',
      'stack',
      'cloud',
      'group'
    ])
  }

  render() {
    const {size, children: iconName} = this.props;

    const style = {};

    if (size) {
      style.fontSize = `${size}em`;
    }

    return (
      <span
        className={classNames('icon', `icon-${iconName}`)}
        style={style}
      >
      </span>
    );
  }
}
