import React from 'react'
import { connect } from 'react-redux'
import { buyBurger,addBurger } from './actions/burgerActions'

class BurgerContainer extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={numBuy:"",numAdd:""}
  }
  getNumBuy=(e)=>{this.setState({numBuy:parseInt(e.target.value)})}
  getNumAdd=(e)=>{this.setState({numAdd:parseInt(e.target.value)})}
  handleBuyClick =()=>{
    this.props.buyBurger(this.state.numBuy);
    this.setState({numBuy:""})
  }
  handleAddClick =()=>{
    this.props.addBurger(this.state.numAdd);
    this.setState({numAdd:""})
  }

  render(){
  return (
    <div style={{margin: "20px 50px"}}>
      { <h2>Number of Burgers - {this.props.numOfBurgers} </h2> }
      <input type="text" placeholder="Enter the number of Burgers bought" value={this.state.numBuy} onChange={this.getNumBuy}/>
      <button onClick={this.handleBuyClick}>Buy Burger</button> <br/>
      <input type="text" placeholder="Enter the number of Burgers added" value={this.state.numAdd} onChange={this.getNumAdd}/>
    
      <button onClick={this.handleAddClick}>Add Burger</button>
    </div>
  )
}
}
const mapStateToProps = state => {
  return {
    numOfBurgers: state.burger.numOfBurgers
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     buyBurger: () => dispatch(buyBurger(this.state.numBuy)),
//     addBurger: () => dispatch(addBurger(this.state.numAdd))
//   }
// }

export default connect(
  mapStateToProps,
  {buyBurger,addBurger}
)(BurgerContainer)


