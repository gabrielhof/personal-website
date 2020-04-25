import React from 'react';
import classNames from 'classnames';
import {Link} from 'gatsby';
import HeaderStatusEvent from 'src/components/HeaderStatusEvent';

export default class HeaderSection extends React.Component {

  state = {
    onTop: true,
    hidden: false
  }

  handleChange = ({onTop, hidden}) => {
    this.setState({
      onTop,
      hidden
    })
  }

  render() {
    const {onTop, hidden} = this.state;

    return (
      <>
        <HeaderStatusEvent
          onChange={this.handleChange}
        />

        <header className={classNames({
          'header-section': true,
          'header-on-top': onTop,
          'header-hidden': !onTop && hidden
        })}>
          <nav>
            <Link
              id="header-home-link"
              className="website-logo"
              to="/"
            >
              GH
            </Link>
          </nav>
        </header>
      </>
    );
  }
};
