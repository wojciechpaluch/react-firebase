import React, { Component } from 'react';

class App extends Component {

  getHandler = () => {

    fetch('https://ad-snadbox.firebaseio.com/users/Wojciech.json').then(response => response.json())
        .then(console.log)
  }

  render() {
    return (
      <div>
        <button onClick={this.getHandler}>Get Data from our endpoint</button>
      </div>
    );
  }
}

export default App;
