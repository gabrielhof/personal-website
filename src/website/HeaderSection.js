import React from 'react';
import classnames from 'classnames';
import {Link} from 'gatsby';

const MINIMUM_SCROLL_COUNT = 100;

export default class HeaderSection extends React.Component {

  state = {
    onTop: true,
    hidden: false
  }

  lastScrollPosition = 0
  lastScrollDirection = null
  scrollSinceChangeDirection = 0

  componentWillMount() {
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

    const state = {
      onTop: this.shouldBeOnTop(scrollPosition),
      hidden: this.state.hidden
    };

    const status = this.getHeaderStatus(scrollPosition);

    if (status.shouldChange) {
      state.hidden = (status.direction === 'down');
    }

    if (state.onTop != this.state.onTop || state.hidden !== this.state.hidden) {
      this.setState(state);
    }

    this.lastScrollPosition = state.onTop ? 0 : scrollPosition;
  }

  render() {
    const {onTop, hidden} = this.state;

    return (
      <header className={classnames({
        'header-section': true,
        'header-on-top': onTop,
        'header-hidden': !onTop && hidden
      })}>
        <nav>
          <Link className="website-logo" to="/">GH</Link>
        </nav>
      </header>
    );
  }
};
