import React from 'react';
import { connect } from 'react-redux';
import { add, remove, thankYou } from '../../../store/actions/cartActions';
import { Redirect } from 'react-router-dom';

import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Niewłaściwy adres email';
    }

    if (!values.firstName) {
      errors.firstName = 'Wymagane';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Nie może przekraczać 15 znaków';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Wymagane';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Nie może przekraczać 20 znaków';
    }

    if (!values.city) {
      errors.city = 'Wymagane';
    } else if (values.city.length > 20) {
      errors.city = 'Nie może przekraczać 20 znaków';
    }

    if (!values.address) {
      errors.address = 'Wymagane';
    } else if (values.address.length > 30) {
      errors.address = 'Nie może przekraczać 30 znaków';
    }

    if (!values.zipCode1) {
      errors.zipCode1 = 'Wymagane';
    } else if (!/^[0-9]*$/.test(values.zipCode1)){
        errors.zipCode1 = 'Może zawierać tylko cyfry'
    }
    if (!values.zipCode2) {
      errors.zipCode2 = 'Wymagane';
    } else if (!/^[0-9]*$/.test(values.zipCode2)){
        errors.zipCode2 = 'Może zawierać tylko cyfry'
    }

    if (!values.delivery) {
      errors.delivery = 'Wymagane';
    }

    if (!values.phone) {
      errors.phone = 'Wymagane';
    } else if (!values.phone.length === 9) {
      errors.phone = 'Numer musi zawierać 9 cyfr';
    }else if (!/^[0-9]*$/.test(values.phone)){
        errors.phone = 'Można wpisać tylko cyfry'
    }
  
    return errors;
  };

const OrderSummary = props => {
    const formik = useFormik({
        initialValues:{
            email: "",
            firstName: "",
            lastName: "",
            city: "",
            address: "",
            zipCode1: "",
            zipCode2: "",
            zipCode: "",
            phone: "",
            delivery: ""
        },
        validate,
        onSubmit: values => {
            const formData = {...values, zipCode: values.zipCode1 + "-" + values.zipCode2};
            console.log("Value to be sent in http request: " + JSON.stringify(formData, null, 2));
            props.thankYouMsg("order");
            window.location = window.origin + "/pay";
            // submit = <Redirect to="/pay" />
        }
    });

    let submit = null;
    function zipSkip(e){
            const code = e.target.value.toString().length;
            if(code > 1){
                document.getElementById("zipCode2").focus();
            }
    }

    function renderList(){
        const list = props.productsList.map((prod, index) => {
            return (
                <li key={"summary-prod-" + index} className="cart-summary__product-list-item" id={prod.id}>
                        <img className="product-list-item__prod-img" src={prod.imgSrc} alt={prod.name}/>
                        <span className="product-list-item__details">
                            <span>{prod.price + " "}</span>
                            <span>{prod.name}</span>
                        </span>
                        <span className="product-list-item__amount">
                            <button className="product-list-item__amount-button" onClick={() => props.onAddToCart(prod)}>
                            <img src="/Assets/Imgs/icons/plus-icon.svg" alt="plus icon" />
                            </button>
                            <span className="product-list-item__amount-text">{prod.amount} szt</span>
                            <button className="product-list-item__amount-button" onClick={() => props.onRemoveFromCart(prod)}>
                                <img src="/Assets/Imgs/icons/minus-icon.svg" alt="minus icon" />
                            </button>
                        </span>
                </li>
            )
        }); 
        return list;
    }

        return props.productsList.length > 0 ? (
            <div className="order">
                {submit}
                <div className="cart-summary">
                    <h2 className="form-title">Twoje zamówienie</h2>
                    <div className="cart-summary__summary">
                        <ul className="cart-summary__product-list">
                            {renderList()}
                        </ul>
                    </div>
                </div>
    
                <h2 className="form-title">Dane do przesyłki</h2>
                <form className="form cart-summary__form">
                    <div className="cart-summary__form-fields">
                        <section className="input-short">
                            {formik.touched.email && formik.errors.email ? <div className="error-msg">{formik.errors.email}</div> : null}
                            <label className="form-label" htmlFor="email" >E-mail</label>
                            <input className="form-input" type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                            {formik.errors.firstName ? <div className="error-msg">{formik.errors.firstName}</div> : null}
                            <label className="form-label" htmlFor="firstName" >Imię</label>
                            <input className="form-input" type="text" name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName}/>
                            {formik.touched.lastName && formik.errors.lastName ? <div className="error-msg">{formik.errors.lastName}</div> : null}
                            <label className="form-label" htmlFor="lastName" >Nazwisko</label>
                            <input className="form-input" type="text" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName}/>
                            {formik.touched.city && formik.errors.city ? <div className="error-msg">{formik.errors.city}</div> : null}
                            <label className="form-label" htmlFor="city" >Miasto</label>
                            <input className="form-input" type="text" name="city" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city}/>
                        </section>
                        <span className="cart-summary__zip-code">
                            <div className="error-msg" style={{gridArea: "error"}}>
                                {formik.touched.zipCode1 && formik.errors.zipCode1 ? formik.errors.zipCode1 : formik.touched.zipCode2 && formik.errors.zipCode2 ? formik.errors.zipCode2 : null}
                            </div>
                            <label className="form-label" htmlFor="zip-code" >Kod</label>
                            <input className="form-input" type="text" name="zipCode1" id="zipCode1" onChange={(e) => {zipSkip(e); formik.handleChange(e)}} onBlur={formik.handleBlur} autoComplete="off" maxLength="2" value={formik.values.zipCode1}/>
                            <div className="zip-dash"></div>
                            <input className="form-input" type="text" name="zipCode2" id="zipCode2" onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off" maxLength="3" value={formik.values.zipCode2}/>
                        </span>
                        <section className="input-long">
                            {formik.touched.address && formik.errors.address ? <div className="error-msg">{formik.errors.address}</div> : null}
                            <label className="form-label" htmlFor="address" >Adres</label>
                            <input className="form-input" type="text" name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}/>
                            {formik.touched.phone && formik.errors.phone ? <div className="error-msg">{formik.errors.phone}</div> : null}
                            <label className="form-label" htmlFor="phone" >Tel.</label>
                            <input className="form-input" type="text" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
                        </section>
                    </div>
                </form>
    
                <h2 className="form-title">Wybierz rodzaj przesyłki</h2>
                <form className="form cart-summary__form">
                    <div className="cart-summary__delivery">
                        {formik.touched.delivery && formik.errors.delivery ? <div className="error-msg">{formik.errors.delivery}</div> : null}
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <label className="form-label" htmlFor="delivery" value="20">20 PLN - Kurier</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <label className="form-label" htmlFor="delivery" value="14">14 PLN - List Polecony</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <label className="form-label" htmlFor="delivery" value="8">8 PLN - Paczkomat</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            <label className="form-label" htmlFor="delivery" value="0">0 PLN - Odbiór osobisty</label>
                        </span>
                    </div>
    
                </form>
                <button className="form-button" type="submit" onClick={formik.handleSubmit}>
                    Płatność
                </button>
            </div>
        ) : <Redirect to="/shop"/>
}
const mapStateToProps = state => {
    return {
        productsList: state.productsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (prod) => dispatch(add(prod)),
        onRemoveFromCart: (prod) => dispatch(remove(prod)),
        thankYouMsg: msg => dispatch(thankYou(msg))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);