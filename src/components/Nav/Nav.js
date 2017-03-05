import 'styles/Nav.less';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import Utils from '../../utils/CinnamonUtils';

class Nav extends Component {

    static propTypes = {
        sections: PropTypes.arrayOf(PropTypes.string)
    };

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        sections: ['Games', 'About Us', 'Contact Us']
    };

    render () {
        let brandImg = '/images/logo.png';
        let gameSections = [];

        this.props.sections.forEach((section, index) => {
            gameSections.push(<li key={index}><Link activeClassName="active" to={`/${Utils.cleanStringAndLowerCase(section)}`}>{section}</Link></li>);
        });
        return (
            <div className="cinnamon-container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar=brand" href="#">
                                <img id="cinnamon-brand-logo" alt="Brand" src={brandImg}/>
                            </a>
                            <span className="cinnamon-brand-name">CINNAMON GAMES</span>
                            <ul className="nav navbar-nav navbar-right">
                                {gameSections}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Nav;