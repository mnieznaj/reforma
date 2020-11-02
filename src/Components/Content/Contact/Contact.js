import React from 'react';

class Contact extends React.Component {

    render(){
        return(
            <div id="contact" className="contact">
                <h2 className="contact-title form-title">Kontakt</h2>
                <form className="contact-form">
                    <label className="form-label" for="">Twój adres e-mail</label>
                    <input className="form-input" type="text" placeholder=""/>
                    <label className="form-label" for="">Tytuł</label>
                    <input className="form-input" type="text" placeholder=""/>
                    <label className="form-label" for="">Treść</label>
                    <textarea className="form-input form-textarea" ></textarea>
                    <button className="form-button" type="submit">Wyślij</button>
                </form>
            </div>
        )
    }
}

export default Contact;