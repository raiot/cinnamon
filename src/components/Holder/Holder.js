import React, {Component, PropTypes} from 'react';


class Holder extends Component {
    static propTypes = {
        witdh: PropTypes.string,
        height: PropTypes.string
    };

    static defaultProps = {
        witdh: '242px',
        height: '200px'
    };

    render() {
        return (
            <img ref="placeholder" data-src={`holder.js/${this.props.witdh}x${this.props.height}`}/>
        );
    }
}

export default Holder;