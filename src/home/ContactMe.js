import React from 'react';
import ExternalLink from 'src/components/ExternalLink';

export default class ContactMe extends React.PureComponent {
  render() {
    return (
      <section className="contact-me-section">
        <h4>What's next?</h4>

        <h3>Get In Touch</h3>

        <p className="information">Reach out to me. Lets discuss about your project and how I might be able to help bringing you ideas into the real world.</p>

        <div class="quickly-contact">
          <ExternalLink
            to="mailto:gabrielhof@gmail.com"
            className="button underlined"
          >
            <span>Send me an email</span>
          </ExternalLink>
        </div>
      </section>
    );
  }
}
