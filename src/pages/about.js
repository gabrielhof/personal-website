import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class AboutPage extends React.Component {

  state = {
    toggled: null
  }

  toggle = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="About" />
        <h1>Hey!</h1>

        <button onClick={this.toggle}>
          {this.state.toggled === null && 'Click Me'}
          {this.state.toggled !== null && (this.state.toggled ? 'Hi' : 'Bye!')} 
        </button>
      </Layout>
    );
  }
}