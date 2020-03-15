import React from 'react';
import PropTypes from 'prop-types';
import ExternalLink from 'src/components/ExternalLink';

export default class Job extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    companyName: PropTypes.string,
    companyWebsite: PropTypes.string,
    period: PropTypes.string,
    experience: PropTypes.arrayOf(PropTypes.string)
  }

  render() {
    const {
      title,
      companyName,
      companyWebsite,
      period,
      experience
    } = this.props;

    return (
      <div className="job-item">
        <div className="job-header">
          <h5 className="period">{period}</h5>

          <h4 className="title-and-company">
            <span>{title}</span>

            <span className="at"> @ </span>

            <ExternalLink
              className="at"
              to={companyWebsite}
            >
              {companyName}
            </ExternalLink>
          </h4>
        </div>

        <ul className="experience-list">
          {experience.map(text => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    );
  }

}
