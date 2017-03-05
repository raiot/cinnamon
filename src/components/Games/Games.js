import React, {Component} from 'react';
import '../../styles/Games.less';

import Game from './Game/Game';

class Games extends Component {
    render () {
        const gameElements = [];
        [1, 2, 3, 4, 5, 6].forEach((game) => {
            gameElements.push(<div className="col-sm-6 col-md-4"><Game title={`Game-${game}`}/></div>);
        });
        return (
            <div className="games-container">
                <div className="row">
                    {gameElements}
                </div>
            </div>
        );
    }
}

export default Games;