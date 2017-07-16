import React, { Component } from 'react';
import { Router } from '../routes';
import moment from 'moment';

class Index extends Component {
  render() {
    return (
      <div>
        Index Pages {moment().format('LLLL')}
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
