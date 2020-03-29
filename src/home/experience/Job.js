import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderStatusEvent from 'src/components/HeaderStatusEvent';
import Bumper from 'src/components/Bumper';
import ExternalLink from 'src/components/ExternalLink';

export default class Job extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    companyName: PropTypes.string,
    companyWebsite: PropTypes.string,
    period: PropTypes.string,
    experience: PropTypes.arrayOf(PropTypes.string)
  }

  state = {
    pageHeaderShown: false,
    jobHeaderSticked: false
  }

  handlePageHeaderChange = ({onTop, hidden}) => {
    this.setState({
      pageHeaderShown: !onTop && !hidden
    });
  }

  handleBumperChange = ({wasHit}) => {
    this.setState({
      jobHeaderSticked: wasHit
    });
  }

  render() {
    const {
      title,
      companyName,
      companyWebsite,
      period,
      experience
    } = this.props;

    const {
      pageHeaderShown,
      jobHeaderSticked
    } = this.state;

    return (
      <>
        <HeaderStatusEvent onChange={this.handlePageHeaderChange} />

        <div className="job-item">
          <Bumper onChange={this.handleBumperChange} />

          <div
            className={classNames({
              'job-header': true,
              'page-header-shown': pageHeaderShown,
              'sticky': jobHeaderSticked
            })}
          >
            <h5 className="period">{period}</h5>

            <h4 className="title-and-company">
              <span>{title}</span>

              <span className="at"> @ </span>

              <ExternalLink
                to={companyWebsite}
                underlined
                className="at"
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
      </>
    );
  }

}
