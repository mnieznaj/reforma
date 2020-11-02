import React from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../../../store/actions/cartActions';
import { Link, Redirect, redirect } from 'react-router-dom';

class OrderSummary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formData: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    zipSkip(e){
        const code = e.target.value.toString().length;
        if(code > 1){
            document.getElementById("zip-code-2").focus();
        }
    }
    zipRestrict(e){
        const code = e.target.value.toString().length;


    }

    renderList(){
        const list = this.props.productsList.map(prod => {
            return (
                <li className="cart-summary__product-list-item" id={prod.id}>
                        <img className="product-list-item__prod-img" src={prod.imgSrc} alt={prod.name}/>
                        <span className="product-list-item__details">
                            <span>{prod.price + " "}</span>
                            <span>{prod.name}</span>
                        </span>
                        <span className="product-list-item__amount">
                            <button className="product-list-item__amount-button" onClick={() => this.props.onAddToCart(prod)}>
                            <img src="/Assets/Imgs/icons/plus-icon.svg" alt="plus icon" />
                            </button>
                            <span className="product-list-item__amount-text">{prod.amount} szt</span>
                            <button className="product-list-item__amount-button" onClick={() => this.props.onRemoveFromCart(prod)}>
                                <img src="/Assets/Imgs/icons/minus-icon.svg" alt="minus icon" />
                            </button>
                        </span>
                </li>
            )
        }); 
        return list;
    }

    render(){
        return this.props.productsList.length > 0 ? (
            <div className="order">
                <div className="cart-summary">
                    <h2 className="form-title">Twoje zamówienie</h2>
                    <div className="cart-summary__summary">
                        <ul className="cart-summary__product-list">
                            {this.renderList()}
                        </ul>
                    </div>
                </div>
    
                <h2 className="form-title">Dane do przesyłki</h2>
                <form className="form cart-summary__form">
                    <div className="cart-summary__form-fields">
                        <section className="input-short">
                            <label className="form-label" for="email" >E-mail</label>
                            <input className="form-input" type="text" name="email"/>
                            <label className="form-label" for="name" >Imię</label>
                            <input className="form-input" type="text" name="name"/>
                            <label className="form-label" for="surname" >Nazwisko</label>
                            <input className="form-input" type="text" name="surname"/>
                            <label className="form-label" for="city" >Miasto</label>
                            <input className="form-input" type="text" name="city"/>
                        </section>
                        <span className="cart-summary__zip-code">
                            <label className="form-label" for="zip-code" >Kod</label>
                            <input className="form-input" type="text" name="zip-code-1" id="zip-code-1" onChange={this.zipSkip} autoComplete="off" maxlength="2"/>
                            <div className="zip-dash"></div>
                            <input className="form-input" type="text" name="zip-code-2" id="zip-code-2" autoComplete="off" maxlength="3"/>
                        </span>
                        <section className="input-long">
                            <label className="form-label" for="address" >Adres</label>
                            <input className="form-input" type="text" name="address"/>
                            <label className="form-label" for="phone" >Tel.</label>
                            <input className="form-input" type="text" name="phone"/>
                        </section>
                    </div>
                </form>
    
                <h2 className="form-title">Wybierz rodzaj przesyłki</h2>
                <form className="form cart-summary__form">
                    <div className="cart-summary__delivery">
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabindex="0"/>
                            <label className="form-label" for="delivery">20 PLN - Kurier</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabindex="0"/>
                            <label className="form-label" for="delivery">14 PLN - List Polecony</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabindex="0"/>
                            <label className="form-label" for="delivery">8 PLN - Paczkomat</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabindex="0"/>
                            <label className="form-label" for="delivery">0 PLN - Odbiór osobisty</label>
                        </span>
                    </div>
    
                </form>
                <button className="form-button" type="submit">
                    <Link to="/pay">Płatność</Link>
                </button>
                
                
            </div>
        ) : <Redirect to="/shop"/>
    }
}
const mapStateToProps = state => {
    return {
        productsList: state.productsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (prod) => dispatch(add(prod)),
        onRemoveFromCart: (prod) => dispatch(remove(prod))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);