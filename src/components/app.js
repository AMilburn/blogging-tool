import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	{/* Need to pass child components to App
      		and define where this component should go */}
      	{ this.props.children }
      </div>
    );
  }
}
