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
        this.state = {index: 0};
        this.handleClick = this.handleClick.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    static defaultProps = {
        sections: ['/', 'Games', 'About Us', 'Contact Us']
    };

    handleClick(event) {
        let index = parseInt(event.target.id.split('menu-')[1], 10);
        this.setState({index});
    }

    isActive(index) {
        return index === this.state.index ? 'active' : '';
    }

    render () {
        let brandImg = '/images/logo.png';
        let gameSections = [];

        this.props.sections.forEach((section, index) => {
            if(section !== '/') {
                gameSections.push(<li key={index} className={this.isActive(index)}><Link id={`menu-${index}`} onClick={this.handleClick} to={`/${Utils.cleanStringAndLowerCase(section)}`}>{section}</Link></li>);
            }
        });
        return (
            <div className="cinnamon-nav-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a id="menu-0" onClick={this.handleClick} className="navbar=brand" href="#">
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