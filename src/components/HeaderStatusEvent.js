import React from 'react';
import PropTypes from 'prop-types';

const MINIMUM_SCROLL_COUNT = 100;

//TODO: avoid calculating the header status for each listener bind

export default class HeaderStatusEvent extends React.PureComponent {

  static propTypes = {
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {}
  }

  lastScrollPosition = 0
  lastScrollDirection = null
  scrollSinceChangeDirection = 0

  header = {
    onTop: true,
    hidden: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldBeOnTop(currentScrollPosition) {
    return currentScrollPosition <= 0;
  }

  getHeaderStatus(scrollPosition) {
    const scrollCount = (this.lastScrollPosition - scrollPosition);
    let scrollDirection = (scrollCount < 0) ? 'down' : 'up';

    if (scrollDirection === this.lastScrollDirection) {
      this.scrollSinceChangeDirection = (this.scrollSinceChangeDirection + Math.abs(scrollCount));
    } else {
      this.lastScrollDirection = scrollDirection;
      this.scrollSinceChangeDirection = 0;
    }

    return {
      shouldChange: (this.scrollSinceChangeDirection >= MINIMUM_SCROLL_COUNT),
      direction: scrollDirection
    }
  }

  handleScroll = () => {
    const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop);

    const header = {
      onTop: this.shouldBeOnTop(scrollPosition),
      hidden: this.header.hidden
    };

    const status = this.getHeaderStatus(scrollPosition);

    if (status.shouldChange) {
      header.hidden = (status.direction === 'down');
    }

    if (header.onTop !== this.header.onTop || header.hidden !== this.header.hidden) {
      this.header = header;
      this.props.onChange(header);
    }

    this.lastScrollPosition = header.onTop ? 0 : scrollPosition;
  }

  render() {
    return null;
  }
}
