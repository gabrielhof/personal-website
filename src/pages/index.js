import React from 'react';
import { Link } from 'gatsby';

import WebsitePage from 'src/website/WebsitePage';
import HeroSection from 'src/home/HeroSection';
import Image from '../components/image';
import SEO from '../components/seo';

export default class IndexPage extends React.PureComponent {
  render() {
    return (
      <WebsitePage title="Home">
        <HeroSection />
      </WebsitePage>
    );
  }
}

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people!</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <ul>
//     <li>
//         <Link to="/page-2/">Go to page 2</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//     </ul>
//   </Layout>
// )

// export default IndexPage
