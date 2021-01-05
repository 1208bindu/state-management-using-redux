import React from 'react'
import { connect } from 'react-redux'
import { buyPizza,addPizza } from './actions/pizzaActions'

 
class PizzaContainer extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={numBuy:"",numAdd:""}
  }
  getNumBuy=(e)=>{this.setState({numBuy:parseInt(e.target.value)})}
  getNumAdd=(e)=>{this.setState({numAdd:parseInt(e.target.value)})}
  handleBuyClick =()=>{
    this.props.buyPizza(this.state.numBuy);
    this.setState({numBuy:""})
  }
  handleAddClick =()=>{
    this.props.addPizza(this.state.numAdd);
    this.setState({numAdd:""})
  }

  render(){
  return (
    <div style={{margin: "20px 50px"}}>
    <h2>Number of Pizzas - {this.props.numOfPizzas} </h2>
    <input type="text" placeholder="Enter the number of Pizzas bought" value={this.state.numBuy} onChange={this.getNumBuy}/>
    <button onClick={this.handleBuyClick}>Buy Pizza</button> <br/>
    <input type="text" placeholder="Enter the number of Pizzas added" value={this.state.numAdd} onChange={this.getNumAdd}/>
    <button onClick={this.handleAddClick}>Add Pizza</button>
   
    
    </div>
  )
}
}
const mapStateToProps = state => {
  return {
    numOfPizzas: state.pizza.numOfPizzas
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     buyPizza: () => dispatch(buyPizza()),
//     addPizza: () => dispatch(addPizza())
//   }
// }

export default connect(
  mapStateToProps,
  {buyPizza,addPizza} 
)(PizzaContainer)
