import React from 'react';
import classNames from 'classnames';
import HeaderStatusEvent from 'src/components/HeaderStatusEvent';

export default class Bumper extends React.Component {

  bumperRef = React.createRef();
  bumperObserver = null;

  wasPreviouslyHit = false

  state = {
    pageHeaderShown: false
  }

  componentDidMount() {
    this.bumperObserver = new IntersectionObserver(entries => {
      const [bumperEntry] = entries;
      this.handleBumperStatusChanged(bumperEntry);
    }, {
      threshold: [1]
    });

    if (!this.bumperRef.current) {
      return;
    }

    this.bumperObserver.observe(this.bumperRef.current);
  }

  handleBumperStatusChanged = ({intersectionRatio, boundingClientRect}) => {
    const wasHit = (intersectionRatio < 1 && boundingClientRect.top <= 0);

    if (wasHit === this.wasPreviouslyHit) {
      return;
    }

    this.wasPreviouslyHit = wasHit;

    this.props.onChange({
      wasHit
    });
  }

  componentWillUnmount() {
    if (!this.bumperObserver) {
      return;
    }

    if (!this.bumperRef.current) {
      return;
    }

    this.bumperObserver.unobserve(this.bumperRef.current);
  }

  handlePageHeaderChange = ({onTop, hidden}) => {
    this.setState({
      pageHeaderShown: !onTop && !hidden
    });
  }

  render() {
    return (
      <>
      <HeaderStatusEvent onChange={this.handlePageHeaderChange} />

      <div
        ref={this.bumperRef}
        className={classNames('bumper', {
          'page-header-shown': this.state.pageHeaderShown
        })}
      ></div>
      </>
    )
  }
}
