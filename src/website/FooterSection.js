import React from 'react';
import ContactList from 'src/components/ContactList';
import ExternalLink from 'src/components/ExternalLink';

export default class FooterSection extends React.PureComponent {

  render() {
    return (
      <footer className="footer-section">
        <div className="footer-container">
          <ContactList id="footer-contact" />

          <div className="description">
            <p>
              <ExternalLink to="https://github.com/bchiang7/v4">
                Design inspired by Brittany Chiang's website.
              </ExternalLink>
            </p>

            <p>
              <ExternalLink to="https://github.com/gabrielhof/personal-website">
                Implemented by Gabriel Hoff.
              </ExternalLink>
            </p>
          </div>
        </div>
      </footer>
    )
  }

}
