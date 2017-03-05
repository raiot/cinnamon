import Holder from 'holderjs';
import React, {Component, PropTypes} from 'react';

class Game extends Component {

    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        url: PropTypes.string,
        playText: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const imgNode = this.placeholder;
        this.createPlaceholder(imgNode);
    }

    static defaultProps = {
        title: 'Game Title',
        description: 'This is a sample game description',
        thumbnail: 'holder.js/242x200',
        url: '#',
        playText: 'Play'
    };

    createPlaceholder (node) {
        Holder.run({
            domain: 'holder.js',
            images: node,
            object: null,
            bgnodes: null,
            stylenodes: null
        });
    }

    render() {
        return (
            <div className="thumbnail">
                <img alt="holder" ref={(img) => this.placeholder = img} data-src="holder.js/242x200"/>
                <div className="caption">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <p>
                        <a href={this.props.url} className="btn btn-primary" role="button">{this.props.playText}</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Game;