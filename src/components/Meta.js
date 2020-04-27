import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import siteImage from 'src/images/site-image.png';

const protocol = 'https://';
const websiteUrl = `${protocol}gabrielhoff.com`;
const webSiteImage = `${websiteUrl}${siteImage}`;
const description = `Gabriel Hoff is a dedicated, proficient, remote full-stack software engineer, passionate about problem-solving and building high-quality applications.`;
const keywords = [
  'Gabriel Hoff',
  'Gabriel',
  'Hoff',
  'gabrielhof',
  'gabrielhoff',
  'software engineer',
  'full-stack engineer',
  'back-end developer',
  'front-end developer',
  'remote',
  'javascript',
  'java'
].join(', ');
const twitterUser = '@gabriel_hof';

//TODO: get this information above from a datastore
//TODO: separate the Meta helper from the standard meta props
//TODO: find a way to hookup or a use a component to get the location instead of get it from the parent components

export default class Meta extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    fullTitle: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  }

  static defaultProps = {
    fullTitle: 'Gabriel Hoff | Software Engineer',
    location: {}
  }

  render() {
    const {title, fullTitle, location} = this.props;

    const finalTitle = title ? `${title} | Gabriel Hoff` : fullTitle;
    const fullUrl = `${websiteUrl}${location.pathname}`;

    return (
      <Helmet
        titleTemplate="%s | Gabriel Hoff"
        defaultTitle={fullTitle}
        title={title}
        htmlAttributes={{
          lang: 'en'
        }}
      >
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta itemprop="name" content={finalTitle} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content={webSiteImage} />

        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={finalTitle} />
        <meta property="og:site_name" content={Meta.defaultProps.fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={webSiteImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={finalTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:url" content={fullUrl} />
        <meta property="twitter:site" content={twitterUser} />
        <meta property="twitter:creator" content={twitterUser} />
        <meta property="twitter:image" content={webSiteImage} />
        <meta property="twitter:image:alt" content={finalTitle} />

      </Helmet>
    );
  }
}
