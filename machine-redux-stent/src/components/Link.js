import React from 'react';

class Link extends React.Component {
  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }
  render() {
    return (
      <a href="#" onClick={event => this.handleClick(event)}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;