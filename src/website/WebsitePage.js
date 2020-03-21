import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from 'src/website/HeaderSection';
import FooterSection from 'src/website/FooterSection';

import 'src/styles/index.scss';

export default class WebsitePage extends React.PureComponent {

  static propTypes = {
    title: PropTypes.string,
    headProps: PropTypes.shape(),
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <>
        <HeaderSection />

        <main className="main-content">
          {this.props.children}
        </main>

        <FooterSection />
      </>
    );
  }
};
