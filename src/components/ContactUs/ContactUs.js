import React, {Component} from 'react';
import '../../styles/ContactUs.less';


class ContactUs extends Component {
    render() {
        return (
            <div className="contactus-container">
                <h3>Contact Us</h3>
                <form>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Your name</span>
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-addon" id="basic-addon2">@example.com</span>
                    </div>
                    <div className="input-group">
                        <textarea type="textarea" cols="100" rows="10" className="form-control" placeholder="Your message"></textarea>
                    </div>
                    <button type="button" className="btn btn-default">Send</button>
                </form>
            </div>
        );
    }
}

export default ContactUs;