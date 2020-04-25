import React from 'react';
import ContactList from 'src/components/ContactList';

export default class SideContactList extends React.PureComponent {
  render() {
    return (
      <ContactList id="side-contact" className="side-contact-list" />
    );
  }
}
