import 'normalize.css/normalize.css';

import Nav from './Nav/Nav';

import React, {Component, PropTypes} from 'react';

class Home extends Component {

  static propTypes = {

  };

  static defaultProps = {

  };
  
  
  render() {
    return (
      <div className="cinnamon-container">
        <Nav />
      </div>
    );
  }

}

export default Home;
