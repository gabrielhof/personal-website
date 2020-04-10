import React from 'react';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';
import ContactList from 'src/components/ContactList';

export default class HeroSection extends React.PureComponent {

  render() {
    return (
      <section className="hero-section">
        <div className="introduction">
          <h3>Hey, I'm</h3>
          <h1>Gabriel Hoff.</h1>
          <h2>I'm a Software Enginer.</h2>
        </div>

        <div className="short-presentation">
          <p>
            <span>I'm a dedicated and proficient full-stack software engineer, working remotely from </span>
            <ExternalLink
              to="https://goo.gl/maps/Xzp5hRJnGQ5kbKt77"
              underlined
            >
              Novo Hamburgo, Brazil <Icon>location</Icon>
            </ExternalLink>.
            <span> I'm passionate about problem-solving and building high-quality applications.</span>
          </p>
        </div>

        <div className="quickly-contact">
          <ExternalLink
            to="mailto:gabrielhof@gmail.com"
            className="button underlined"
          >
            <span>Let's have a talk</span>
          </ExternalLink>
        </div>

        <ContactList />
      </section>
    );
  }

}
