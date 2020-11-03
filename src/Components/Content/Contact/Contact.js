import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { thankYou } from '../../../store/actions/cartActions';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            title: "",
            message: ""
        }
    }

    render(){
        return(
            <div id="contact" className="contact">
                <h2 className="contact-title form-title">Kontakt</h2>
                <form className="contact-form">
                    <label className="form-label" htmlFor="email">Twój adres e-mail</label>
                    <input className="form-input" type="text" name="email"/>
                    <label className="form-label" htmlFor="title">Tytuł</label>
                    <input className="form-input" type="text" name="title"/>
                    <label className="form-label" htmlFor="message">Treść</label>
                    <textarea className="form-input form-textarea" name="message" ></textarea>
                    
                    <button className="form-button" type="submit" onClick={() => this.props.thankYouMsg("contact")}>
                        <Link to="/thank-you">Wyślij</Link>
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        thankYouMsg: msg => dispatch(thankYou(msg))
    }
}

export default connect(null, mapDispatchToProps)(Contact);