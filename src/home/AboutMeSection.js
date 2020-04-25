import React from 'react';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';
import WhatIDoSubsection from 'src/home/about/WhatIDoSubsection';
import SkillsSubsection from 'src/home/about/SkillsSubsection';

// TODO: use graphql to get the image
// TODO: better image quality
// TODO: better :hover effect on the image colors

export default class AboutMeSection extends React.PureComponent {

  render() {
    return (
      <section className="about-me-section">
        <h3 className="heading">About Me</h3>

        <div className="picture-and-description">
          <div className="picture">
            <ExternalLink
              id="about-me-picture-github-link"
              to="https://github.com/gabrielhof/"
            >
              <img
                src="https://www.gravatar.com/avatar/39ea753c11ef1d94e09c1a9265767b4a?s=400&d=robohash"
                alt="Me"
              />
            </ExternalLink>
          </div>

          <div className="description">
            <p>
              <span>Hey there! I'm Gabriel, a very dedicated and proficient remote full-Stack software engineer and technical leader, based in </span>
              <ExternalLink
                to="https://goo.gl/maps/Xzp5hRJnGQ5kbKt77"
                underlined
              >
                Novo Hamburgo, Brazil <Icon>location</Icon>
              </ExternalLink>
              <span>.</span>
            </p>
            <p>I'm passionate about problem-solving, building high-quality applications and working on top of Agile principles.</p>
            <p>Having almost 10 years of experience with both Back End and Front End development, I worked from maintaining a legacy Java/JSF application, with more than 20GB of organ transplant data, to building modern web applications using Node.js and React for managing telematics data from 40.000+ vehicles.</p>
          </div>
        </div>

        <WhatIDoSubsection />

        <SkillsSubsection />
      </section>
    );
  }

}
