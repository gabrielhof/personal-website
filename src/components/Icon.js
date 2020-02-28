import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
      <span className={classnames('icon', `icon-${iconName}`)}>
      </span>
    );
  }
}
