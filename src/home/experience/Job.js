import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ExternalLink from 'src/components/ExternalLink';

export default class Job extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    companyName: PropTypes.string,
    companyWebsite: PropTypes.string,
    period: PropTypes.string,
    experience: PropTypes.arrayOf(PropTypes.string)
  }

  jobItemRef = new React.createRef()
  jobHeaderRef = new React.createRef()
  headerObserver = null;

  state = {
    headerSticked: false
  }

  componentDidMount() {
    this.headerObserver = new IntersectionObserver(entries => {
      const [headerEntry] = entries;
      this.handleHeaderPositionChanged(headerEntry);
    }, {
      threshold: [1]
    });

    if (!this.jobHeaderRef.current) {
      return;
    }

    this.headerObserver.observe(this.jobHeaderRef.current);
  }

  componentWillUnmount() {
    if (!this.headerObserver) {
      return;
    }

    if (!this.jobHeaderRef.current) {
      return;
    }

    this.headerObserver.unobserve(this.jobHeaderRef.current);
  }

  handleHeaderPositionChanged = headerEntry => {
    const {intersectionRatio, boundingClientRect} = headerEntry;

    const shouldStick = (intersectionRatio < 1 && boundingClientRect.top <= 0);

    if (shouldStick === this.state.headerSticked) {
      return;
    }

    this.setState({
      headerSticked: shouldStick
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

    return (
      <div
        ref={this.jobItemRef}
        className="job-item"
      >
        <div
          ref={this.jobHeaderRef}
          className={classNames({
            'job-header': true,
            'sticky': this.state.headerSticked
          })}
        >
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
