import React from 'react';
import WebsitePage from 'src/website/WebsitePage';
import HeroSection from 'src/home/HeroSection';
import AboutMeSection from 'src/home/AboutMeSection';
import ExperienceSection from 'src/home/ExperienceSection';
import ContactMe from 'src/home/ContactMe';

export default class IndexPage extends React.PureComponent {
  render() {
    const {location} = this.props;

    return (
      <WebsitePage
        fullTitle="Gabriel Hoff | Software Engineer"
        location={location}
      >
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <ContactMe />
      </WebsitePage>
    );
  }
}
