import React, {Component} from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import {increment, decrement} from './actions/index';
import {addIdea} from './actions/index';
import newIdea from './reducers/addIdea'


class App extends Component {
  constructor() {
    super()
    this.state = {
      idea: ''
    }
  }

  componentDidMount() {
    console.log('updated ideas', this.props.ideas)
  }

  updateIdea = (e) => {
    this.setState({idea: e.target.value})
  }

  submitIdea = (e) => {
    e.preventDefault()
    this.props.onAddIdea(this.state.idea)
  }

  render(){
  // const isLogged = useSelector(state => state.logged)

    return (
      <div className="App">
        <h1>Counter {this.counter}</h1>
        {/* <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button> */}
        <form action="add-idea" onSubmit={this.submitIdea}>
          <input type="text" name='idea' onChange={this.updateIdea}/>
          <input type="submit"/>
        </form>
        <p>
        {this.props.ideas}
        </p>
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ideas: state.ideas
})

const mapDispatchToProps = dispatch => ({
  onAddIdea: idea => dispatch(addIdea(idea))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
// const counter = () => useSelector(state => state.counter)
// const dispatch = () => useDispatch()