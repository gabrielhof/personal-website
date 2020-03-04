import React from 'react';
import classnames from 'classnames';
import {Link} from 'gatsby';

const MINIMUM_SCROLL = 50;

export default class HeaderSection extends React.Component {

  state = {
    isOnTop: true,
    isScrollingDown: false
  }

  lastScrollPosition = 0

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop);

    const isOnTop = scrollPosition <= 0;

    let isScrollingDown = false;

    if (scrollPosition > MINIMUM_SCROLL) {
      isScrollingDown = (scrollPosition > this.lastScrollPosition);
    }

    this.setState({
      isOnTop,
      isScrollingDown
    });

    this.lastScrollPosition = isOnTop ? 0 : scrollPosition;
  }

  render() {
    const {isOnTop, isScrollingDown} = this.state;

    return (
      <header className={classnames({
        'header-section': true,
        'header-on-top': isOnTop,
        'header-hidden': isScrollingDown
      })}>
        <nav>
          <Link className="website-logo" to="/">GH</Link>
        </nav>
      </header>
    );
  }
};
