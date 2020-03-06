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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Purus gravida quis blandit turpis cursus in hac habitasse platea. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a.</p>
          <p>Sit amet risus nullam eget felis eget nunc lobortis. Tellus orci ac auctor augue mauris.</p>
        </div>

        <WhatIDoSubsection />

        <SkillsSubsection />
      </section>
    );
  }

}
