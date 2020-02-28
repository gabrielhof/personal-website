import React from 'react';
import classnames from 'classnames';

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

    console.log(
      `Current: ${scrollPosition}`,
      `With threshold: ${scrollPosition - MINIMUM_SCROLL}`,
      `Last: ${this.lastScrollPosition}`
    );

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

      </header>
    );
  }
};
