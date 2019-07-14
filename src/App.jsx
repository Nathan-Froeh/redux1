import React, {Component} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index'


class App extends Component {
  constructor() {
    super()
    this.state = {
      idea: '',
      counter: useSelector(state => state.counter),
      dispatch: useDispatch()
    }
  }

  updateIdea = (e) => {
    console.log(e.target.value)
  }

  submitIdea = (e) => {
    e.preventDefault()
  }

  // counter = () => useSelector(state => state.counter)
  // dispatch = () => useDispatch()

  render(){
  // const isLogged = useSelector(state => state.logged)

    return (
      <div className="App">
        <h1>Counter {this.counter}</h1>
        {/* <button onClick={() => this.dispatch(increment(2))}>+</button>
        <button onClick={() => this.dispatch(decrement(1))}>-</button> */}
        <form action="add-idea" onSubmit={this.submitIdea}>
          <input type="text" name='idea' onChange={this.updateIdea}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
