import React from 'react';
import ExternalLink from 'src/components/ExternalLink';
import ContactList from 'src/components/ContactList';

export default class HeroSection extends React.PureComponent {

  render() {
    return (
      <section className="hero-section">
        <div className="introduction">
          <h3>Hello World! I'm</h3>
          <h1>Gabriel Hoff.</h1>
          <h2>I'm a Software Engineer.</h2>
        </div>

        <div className="short-presentation">
          <p>
            I'm a dedicated, proficient, remote full-stack software engineer.
            I'm passionate about problem-solving and building high-quality applications.
          </p>
        </div>

        <div className="quickly-contact">
          <ExternalLink
            id="hero-email-link"
            to="mailto:gabrielhof@gmail.com"
            className="button underlined"
          >
            <span>Let's have a talk</span>
          </ExternalLink>
        </div>

        <ContactList id="hero-contact" />
      </section>
    );
  }

}
