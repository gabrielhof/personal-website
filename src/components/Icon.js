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
      'facebook'
    ])
  }

  render() {
    const {children: iconName} = this.props;

    return (
      <span className={classNames('icon', `icon-${iconName}`)}>
      </span>
    );
  }
}
