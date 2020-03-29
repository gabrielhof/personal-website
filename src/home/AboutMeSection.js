import React from 'react';
import WhatIDoSubsection from 'src/home/about/WhatIDoSubsection';
import SkillsSubsection from 'src/home/about/SkillsSubsection';

export default class AboutMeSection extends React.PureComponent {

  render() {
    return (
      <section className="about-me-section">
        <h3 className="heading">About Me</h3>

        <div className="picture">
          {/* TODO: use graphql to get the image */}
          <img
            src="https://www.gravatar.com/avatar/39ea753c11ef1d94e09c1a9265767b4a?s=300&d=robohash"
            alt="myself"
          />
        </div>

        <div className="description">
          <p>Hey there! I'm Gabriel, a very dedicated and proficient remote Full-Stack software engineer and technical leader, based in Novo Hamburgo, Brazil.</p>
          <p>I'm passioned by problem solving, building high quality applications and working with Agile principles.</p>
          <p>Having almost 10 years of experience with both Back End and Front End development, worked from maintaning a legacy Java/JSF application, with more then 20GB of organ transplant data, to building modern web applications using Node.js and React for managing telematics data from 40.000+ vehicles.</p>
        </div>

        <WhatIDoSubsection />

        <SkillsSubsection />
      </section>
    );
  }

}
