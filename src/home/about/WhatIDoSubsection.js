import React from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import Pagination from 'src/components/Pagination';

const data = [
  {
    title: 'Front-End Development',
    description: `Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.
    Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.`
  },
  {
    title: 'Back-End Development',
    description: `Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.
    Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.`
  },
  {
    title: 'Full-Stack Development',
    description: `Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.
    Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.`
  },
  {
    title: 'DevOps',
    description: `Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.
    Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.`
  }
];

export default class WhatIDoSubsection extends React.Component {

  state = {
    currentIndex: 0
  }

  handleChangeSlide = currentIndex => {
    this.setState({
      currentIndex
    });
  }

  render() {
    const {currentIndex} = this.state;

    return (
      <div className="what-i-do-subsection">
        <h4 className="subheading">What I do?</h4>

        <Pagination
          dots={data.length}
          index={currentIndex}
          onChangeIndex={this.handleChangeSlide}
        />

        <SwipeableViews
          index={currentIndex}
          onChangeIndex={this.handleChangeSlide}
          className="swipeable-container"
        >
          {data.map((item, index) => (
            <div
              key={item.title}
              className={classNames({
                slide: true,
                'not-current': (currentIndex !== index)
              })}
            >
              <h3 className="title">{item.title}</h3>

              {item.description.split('\n').map(paragraph => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </SwipeableViews>
      </div>
    );
  }

}
