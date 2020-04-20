import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import Pagination from 'src/components/Pagination';

const SCREEN_SIZES = {
  xxl: 1800,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576
};

//TODO: add left and right buttons (?)

export default class Carousel extends React.Component {

  static propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number
  }

  state = {
    screenWidth: 0,
    currentIndex: 0
  }

  componentDidMount() {
    this.handleScreenResize();
    window.addEventListener('resize', this.handleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
  }

  handleScreenResize = () => {
    const currentWidth = document.body.clientWidth;

    if (this.state.screenWidth === currentWidth) {
      return;
    }

    this.setState({
      screenWidth: currentWidth,
      currentIndex: 0
    });
  }

  handleChangeSlide = currentIndex => {
    this.setState({
      currentIndex
    });
  }

  handleSlideLeft = maxSlides => () => {
    const {currentIndex} = this.state;
    let nextIndex = currentIndex;

    if (currentIndex <= 0) {
      nextIndex = (maxSlides - 1);
    } else {
      nextIndex = (currentIndex - 1);
    }

    this.setState({
      currentIndex: nextIndex
    });
  }

  handleSlideRight = maxSlides => () => {
    const {currentIndex} = this.state;
    let nextIndex = currentIndex;

    if (currentIndex >= (maxSlides - 1)) {
      nextIndex = 0;
    } else {
      nextIndex = (currentIndex + 1);
    }

    this.setState({
      currentIndex: nextIndex
    });
  }

  getScreenConfig() {
    const {props: sizes} = this;
    const width = this.state.screenWidth;

    const sizeName = Object.keys(SCREEN_SIZES).find(name => {
      const size = SCREEN_SIZES[name];

      if (width < size) {
        return false;
      }

      return Boolean(sizes[name]);
    });

    if (sizeName) {
      return {
        type: sizeName,
        sizePerSlide: sizes[sizeName]
      };
    }

    return {
      type: 'xs',
      sizePerSlide: sizes.xs || 1
    };
  }

  groupedChildren(sizePerSlide) {
    const children = React.Children.toArray(this.props.children);

    if (children.length <= 1) {
      return children;
    }

    return children.reduce((newChildren, child, index) => {
      const realIndex = index === 0 ? 0 : Math.floor(index / sizePerSlide);

      const realChild = newChildren[realIndex] || [];
      realChild.push(child);

      newChildren[realIndex] = realChild;
      return newChildren
    }, []);
  }

  render() {
    const {currentIndex} = this.state;
    const {type, sizePerSlide} = this.getScreenConfig();
    const children = this.groupedChildren(sizePerSlide);

    const slides = children.length;

    return (
      <>
        {slides > 1 && (
          <Pagination
            dots={children.length}
            index={currentIndex}
            onChangeIndex={this.handleChangeSlide}
          />
        )}

        <div className="carousel-navigation">
          <button
            className="navigation arrow-left"
            onClick={this.handleSlideLeft(children.length)}
          >
            {'<'}
          </button>

          <SwipeableViews
            index={currentIndex}
            onChangeIndex={this.handleChangeSlide}
            className="carousel-container"
          >
            {children.map((child, index) => (
              <div
                key={`${type}-${index}`}
                className={classNames(
                  'carousel-slide',
                  `per-slide-${child.length}`,
                  (currentIndex === index) && 'active'
                )}
              >
                {child}
              </div>
            ))}
          </SwipeableViews>

          <button
            onClick={this.handleSlideRight(children.length)}
            className="navigation arrow-right"
          >
            {'>'}
          </button>
        </div>
      </>
    );
  }
}
