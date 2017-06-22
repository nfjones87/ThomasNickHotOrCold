import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotDisplayed: true
    };
  }

  toggleModal() {
    if (this.state.isNotDisplayed) {
      this.setState({ isNotDisplayed: false });
    } else {
      this.setState({ isNotDisplayed: true });
    }
  }

  render() {
    return (
      <header>
        <TopNav onClick={() => this.toggleModal()} newGame={this.props.newGame}/>
        <InfoModal isNotDisplayed={this.state.isNotDisplayed} onClick={() => this.toggleModal()} />
        <h1>HOT or COLD</h1>
      </header>
    );
  }
}
