import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'src/components/Icon';

export default class Specialty extends React.PureComponent {

  static propTypes = {
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
      description
    } = this.props;

    return (
      <div className="specialty">
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
