import React from 'react';
import WebsitePage from 'src/website/WebsitePage';
import {Link} from 'gatsby';

export default class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <WebsitePage title="Not Found">
        <div className="not-found-container">
          <h2>404</h2>
          <h3>Page Not Found</h3>

          <Link to="/" className="button">Home</Link>
        </div>
      </WebsitePage>
    );
  }
}
