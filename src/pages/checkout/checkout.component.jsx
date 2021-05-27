import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import './checkout.styles.scss';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (!Object.keys(this.state).every(field => !!this.state[field])) {
      alert('Please check your inputs')
    } else {
      console.log('success')
      window.digitalData.transaction = window.constructTransaction(window.digitalData.cart, window.digitalData.user[0].profile[0], { line1: this.state.street, city: this.state.city, stateProvince: this.state.state, postalCode: this.state.zipcode, country: this.state.country })
      this.props.clearCart()
      this.props.history.push('/success')
    }
    console.log('success')

  }
  render() {
    return (
      <div>
        <div className="checkout-page">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>

            <div className="header-block">
              <span>Description</span>
            </div>

            <div className="header-block">
              <span>Quantity</span>
            </div>

            <div className="header-block">
              <span>Price</span>
            </div>

            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {
            this.props.cartItems.map(cartItem =>
              (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            )
          }
          <div className='total'>
            <span>TOTAL: ${this.props.total}</span>
          </div>


        </div>
        <h1>{!!this.props.cartItems.length ? 'Billing and Shipping Address' : 'Consider Adding Some Items to Your Cart'}</h1>
        {!!this.props.cartItems.length && (
          <form onSubmit={this.handleSubmit}>
            {Object.keys(this.state).map(name => (
              <FormInput
                type="text"
                name={name}
                value={this.state[name]}
                onChange={this.handleChange}
                label={name}
              />
            ))}
            <CustomButton type='submit'>Submit</CustomButton>
          </form>

        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearCart: item => dispatch({ type: 'CLEAR_CART' })
})

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage));