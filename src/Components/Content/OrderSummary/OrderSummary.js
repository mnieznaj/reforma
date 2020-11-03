import React from 'react';
import { connect } from 'react-redux';
import { add, remove, thankYou } from '../../../store/actions/cartActions';
import { Link, Redirect } from 'react-router-dom';

class OrderSummary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                email: "",
                name: "",
                surname: "",
                city: "",
                address: "",
                zipCode: "",
                phone: "",
                delivery: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    zipSkip(e){
        if(e.target.id === "zip-code-1"){
            const code = e.target.value.toString().length;
            if(code > 1){
                document.getElementById("zip-code-2").focus();
            }
        }
    }
    handleZipChange(e){
        this.zipSkip(e);
        const zip1 = document.getElementById("zip-code-1").value;
        const zip2 = document.getElementById("zip-code-2").value;
        if(zip1.length === 2 && zip2.length === 3){
            this.setState({
                ...this.state.formData,
                zipCode: zip1+"-"+zip2
            })
        }
    }

    renderList(){
        const list = this.props.productsList.map((prod, index) => {
            return (
                <li key={"summary-prod-" + index} className="cart-summary__product-list-item" id={prod.id}>
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
                            <label className="form-label" htmlFor="email" >E-mail</label>
                            <input className="form-input" type="text" name="email" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="name" >Imię</label>
                            <input className="form-input" type="text" name="name" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="surname" >Nazwisko</label>
                            <input className="form-input" type="text" name="surname" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="city" >Miasto</label>
                            <input className="form-input" type="text" name="city" onChange={this.handleInputChange}/>
                        </section>
                        <span className="cart-summary__zip-code">
                            <label className="form-label" htmlFor="zip-code" >Kod</label>
                            <input className="form-input" type="text" name="zip-code-1" id="zip-code-1" onChange={this.handleZipChange} autoComplete="off" maxLength="2"/>
                            <div className="zip-dash"></div>
                            <input className="form-input" type="text" name="zip-code-2" id="zip-code-2" onChange={this.handleZipChange} autoComplete="off" maxLength="3"/>
                        </span>
                        <section className="input-long">
                            <label className="form-label" htmlFor="address" >Adres</label>
                            <input className="form-input" type="text" name="address" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="phone" >Tel.</label>
                            <input className="form-input" type="text" name="phone" onChange={this.handleInputChange}/>
                        </section>
                    </div>
                </form>
    
                <h2 className="form-title">Wybierz rodzaj przesyłki</h2>
                <form className="form cart-summary__form">
                    <div className="cart-summary__delivery">
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="delivery" value="20">20 PLN - Kurier</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="delivery" value="14">14 PLN - List Polecony</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="delivery" value="8">8 PLN - Paczkomat</label>
                        </span>
                        <span className="cart-summary__delivery-checkbox">
                            <input className="form-checkbox" type="radio" name="delivery" tabIndex="0" onChange={this.handleInputChange}/>
                            <label className="form-label" htmlFor="delivery" value="0">0 PLN - Odbiór osobisty</label>
                        </span>
                    </div>
    
                </form>
                <button className="form-button" type="submit" onClick={() => this.props.thankYouMsg("order")}>
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
        onRemoveFromCart: (prod) => dispatch(remove(prod)),
        thankYouMsg: msg => dispatch(thankYou(msg))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);