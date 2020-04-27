import React from 'react';
import PropTypes from 'prop-types';
import Meta from 'src/components/Meta';
import HeaderSection from 'src/website/HeaderSection';
import FooterSection from 'src/website/FooterSection';
import SideContactList from 'src/website/SideContactList';
import SideEmailContact from 'src/website/SideEmailContact';

import 'src/styles/index.scss';

export default class WebsitePage extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    fullTitle: PropTypes.string,
    location: PropTypes.object,
    children: PropTypes.node.isRequired
  }

  render() {
    const {title, fullTitle, location} = this.props;
    return (
      <>
        <Meta title={title} fullTitle={fullTitle} location={location} />

        <div className="website-container">
          <HeaderSection />

          <main className="main-content">
            {this.props.children}
          </main>

          <SideContactList />
          <SideEmailContact />

          <FooterSection />
        </div>
      </>
    );
  }
};
