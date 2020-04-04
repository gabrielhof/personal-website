import React from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import Pagination from 'src/components/Pagination';
import Icon from 'src/components/Icon';

const data = [
  {
    icon: 'tag',
    title: 'Front-End Development',
    description: 'Create responsive, component-oriented, test-driven, JavaScript, TypeScript, React and Angular web applications.'
  },
  {
    icon: 'gears',
    title: 'Back-End Development',
    description: 'Develop object-oriented, test-driven, asynchronous, serverless, Java, JavaScript and Node.js software, such as RESTful APIs, queue processing and WebSockets.'
  },
  {
    icon: 'stack',
    title: 'Full-Stack Development',
    description: 'Fully design and implement a multi-tier software architecture, from web apps to API, data management and integration.'
  },
  {
    icon: 'cloud',
    title: 'DevOps',
    description: 'Control versions using Git, continuous integration with Jenkins, containerized applications with Docker, manage infrastructure as code using Terraform are some of the stuff I can do.'
  },
  {
    icon: 'group',
    title: 'Team Work',
    description: 'Work very well with small and big teams, using the best collaboration practices: code reviewing through Pull-Requests, Git Flow branching model and Pair Programming.'
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
          enableMouseEvents
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
              <Icon size={2}>{item.icon}</Icon>

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
