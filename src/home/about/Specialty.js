import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'src/components/Icon';

export default class Specialty extends React.PureComponent {

  static propTypes = {
    current: PropTypes.bool,
    icon: Icon.propTypes.children,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  static defaultProps = {
    current: false
  }

  render() {
    const {
      icon,
      title,
      current,
      description
    } = this.props;

    return (
      <div
        className={classNames('slide', {
          'not-current': current
        })}
      >
        <Icon size={2}>{icon}</Icon>

        <h3 className="title">{title}</h3>

        {description.split('\n').map(paragraph => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

}
