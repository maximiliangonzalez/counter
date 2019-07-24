import React from 'react';
import {useSelector, connect} from 'react-redux';
import * as actions from '../actions/actions';

const App = props => {
  const {increment, decrement} = props;
  const count = useSelector(store => store.count);

  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={() => increment(count)}>+</button>
      <button onClick={() => decrement(count)}>-</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  increment: count => dispatch(actions.increment(count)),
  decrement: count => dispatch(actions.decrement(count))
});

export default connect(null, mapDispatchToProps)(App);