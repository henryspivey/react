import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../hoc/axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  state = {
    ingredients: null,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {

    // axios.get('https://react-my-burger-60839.firebaseio.com/ingredients.json').then(response => {
    //   this.setState({ingredients: response.data})
    // }).catch(error => {
    //   this.setState({error: true})
    // })
  }

  updatePurchaseState(_ingredients) {
    const ingredients = {
      ..._ingredients
    };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      },0);
    // this.setState({purchaseable: sum > 0});
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }


  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    // alert('Continue')
    // this.setState({loading: true})
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Henry',
    //     address: {
    //       street: 'Keizsergract 1',
    //       zipCode: '94086',
    //       country: 'NL'
    //     },
    //     email: 'test@test.com'
    //   },
    //   delivery: '2 day'
    // }
    // axios.post('/orders.json', order).
    // then(
    //   response => {
    //       this.setState({loading: false, purchasing: false})
    //   })
    // .catch(error => {
    //   this.setState({loading: false, purchasing: false})
    // })
    // const queryParams = [];
    // for(let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    // }
    // queryParams.push('price='+this.state.totalPrice);
    // const queryStrings = queryParams.join('&')
    this.props.history.push('/checkout')
  }



  render () {
    const disabledInfo = {
      ...this.props.ings
    }

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary= null;
    let burger = this.state.error ? <p>Ingredients cant be loaded </p> : <Spinner />
    if (this.props.ings) {
        burger = (<Aux>
        <Burger ingredients={this.props.ings}/>
        <BuildControls ingredientAdded={this.props.onIngredientAdded} ingredientRemoved={this.props.onIngredientRemoved} disabled={disabledInfo} price={this.props.price} purchaseable={this.updatePurchaseState(this.props.ings)} ordered = {this.purchaseHandler}/>
      </Aux>)
      orderSummary = <OrderSummary price={this.props.price} ingredients={this.props.ings} purchaseCanceled={this.purchaseCancelHandler} purchaseContinued={this.purchaseContinueHandler} />
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
