import React, { Component } from 'react';
import { Router } from '../routes';

class Index extends Component {
  render() {
    return (
      <div>
        Index Pages
        <div>
          <button onClick={() => { Router.pushRoute('search', { id: 1, name: 'abc' }); }}>
            Search using route name
          </button>
          <button onClick={() => { Router.pushRoute('/search', { id: 1, name: 'abc' }); }}>
            Search using path
          </button>
        </div>
      </div>
    );
  }
}

export default Index;
