import React from 'react';
import ExternalLink from 'src/components/ExternalLink';
import Icon from 'src/components/Icon';

export default class HeroSection extends React.PureComponent {

  render() {
    return (
      <section className="hero-section">
        <div className="introduction">
          <h3>Hey, I'm</h3>
          <h1>Gabriel Hoff</h1>
          <h2>and I'm a Software Enginer</h2>
        </div>

        <div className="short-presentation">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Elit scelerisque mauris pellentesque pulvinar pellentesque. Orci eu lobortis elementum nibh tellus molestie.
          </p>
        </div>

        <ul className="contact-info">
          <li>
            <ExternalLink to="mailto:gabrielhof@gmail.com">
              <Icon>email</Icon>
              gabrielhof@gmail.com
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://goo.gl/maps/Xzp5hRJnGQ5kbKt77">
              <Icon>location</Icon>
              Novo Hamburgo - Brazil
            </ExternalLink>
          </li>
        </ul>

        <ul className="contact-links">
          <li>
            <ExternalLink to="https://github.com/gabrielhof/">
              <Icon>github</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://linkedin.com/in/gabrielhof/">
              <Icon>linkedin</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://twitter.com/gabriel_hof/">
              <Icon>twitter</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://instagram.com/gabriel.hoff/">
              <Icon>instagram</Icon>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://facebook.com/gabrielhof/">
              <Icon>facebook</Icon>
            </ExternalLink>
          </li>
        </ul>
      </section>
    );
  }

}
