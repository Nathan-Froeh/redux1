import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/index'


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.logged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      {isLogged && <h3>is logged in</h3>}
    </div>
  );
}

export default App;
