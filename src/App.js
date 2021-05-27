import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'

import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'

import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import { TrackerProvider, Tracker } from 'react-tracker'
import { trackProductClick } from './tracking/listeners/cart'

import "./App.css";

const tracker = new Tracker([trackProductClick])

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth)

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <TrackerProvider tracker={tracker}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route path='/success' component={() => (<h1>Success!</h1>)} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (

                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
          </Switch>
        </div>
      </TrackerProvider>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
