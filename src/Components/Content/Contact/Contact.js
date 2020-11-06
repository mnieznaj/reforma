import React from 'react';
import { connect } from 'react-redux';
import { thankYou } from '../../../store/actions/cartActions';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};

    if(!values.email){
        errors.email = 'Wymagane'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Niewłaściwy adres email';
    }

    if(!values.title){
        errors.title = 'Wymagane'
    } else if (values.title.length > 15) {
        errors.title = 'Nie może przekraczać 15 znaków';
    }

    if(!values.message){
        errors.message = 'Wymagane'
    }

    return errors;
}

const Contact = props => {
    const formik = useFormik({
        initialValues: {
            email: "",
            title: "",
            message: ""
        },
        validate,
        onSubmit: values => {
            props.thankYouMsg("contact");
            console.log("Message in request: " + JSON.stringify(values));
            window.location = window.origin + "/thank-you";

        }
    });

        return(
            <div id="contact" className="contact">
                <h2 className="contact-title form-title">Kontakt</h2>
                <form className="contact-form" onSubmit={formik.handleSubmit}>
                    {formik.touched.email && formik.errors.email ? <div className="error-msg">{formik.errors.email}</div> : null}
                    <label className="form-label" htmlFor="email">Twój adres e-mail</label>
                    <input className="form-input" type="text" {...formik.getFieldProps('email')}/>
                    {formik.touched.title && formik.errors.title ? <div className="error-msg">{formik.errors.title}</div> : null}
                    <label className="form-label" htmlFor="title">Tytuł</label>
                    <input className="form-input" type="text" {...formik.getFieldProps('title')}/>
                    {formik.touched.message && formik.errors.message ? <div className="error-msg">{formik.errors.message}</div> : null}
                    <label className="form-label" htmlFor="message">Treść</label>
                    <textarea className="form-input form-textarea" {...formik.getFieldProps('message')} ></textarea>
                    
                    <button className="form-button" type="submit">
                        Wyślij
                    </button>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch => {
    return {
        thankYouMsg: msg => dispatch(thankYou(msg))
    }
}

export default connect(null, mapDispatchToProps)(Contact);