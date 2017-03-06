import React, {Component} from 'react';
import '../../styles/AboutUs.less';

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <h3>About Us!</h3>
                <p>
                    We are a group of friends passionate about games, we all are from Hermosillo, Sonora a small
                    city in M&eacute;xico, right now we are living all around the world but still working togheter
                    to make what we love.
                </p>

                <div className="team-members-container">
                    <h3>Team Members</h3>
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" src="http://2.gravatar.com/userimage/114864761/97c5487828d08fb18543d9c47602c5ff" alt="Rene Durazo"/>
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Ren&eacute; Durazo</h4>
                            My name is Ren&eacute; Durazo, I love movies and games, my favorite games are Bloodborne and Chrono Trigger, my favorites movies are Scott Pilgrim vs The World,
                            Jhon Wick, The Thomas Crown Affair, 300 and many more (in no particular order).
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;