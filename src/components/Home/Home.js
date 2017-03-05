import 'normalize.css/normalize.css';
import '../../router/Router';

import React, {Component} from 'react';

class Home extends Component {
  
  render() {
    return (
      <div class="cinnamon-container">
        <div className="cinnamon-welcome">
          <h3>Welcome to Cinnamon Games!</h3>
        </div>
      </div>
    );
  }

}

export default Home;
