import 'styles/Nav.less';

import React, {Component} from 'react';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {index: 0};
        this.handleClick = this.handleClick.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    handleClick(event) {
        let index = parseInt(event.target.id.split('nav-')[1]);
        this.setState({index});
    }

    isActive(index) {
        return index === this.state.index ? 'active' : '';
    }

    render () {
        let brandImg = '/images/logo.png';
        let sections = [];

        ['Games', 'About Us'].forEach((section, index) => {
            sections.push(<li key={index} className={this.isActive(index)}><a id={`nav-${index}`} onClick={this.handleClick} href="#">{section}</a></li>);
        });
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar=brand" href="#">
                        <img id="cinnamon-brand-logo" alt="Brand" src={brandImg}/>
                        </a>
                        <span className="cinnamon-brand-name">CINNAMON GAMES</span>
                        <ul className="nav navbar-nav navbar-right">
                            {sections}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;