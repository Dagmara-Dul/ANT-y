import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class NotFound extends Component {
    render() {
      return( 
      <div className="errorBackground">
        <h3>404, ups! nie ma takiej strony</h3>
      </div>
        );
    }
  }