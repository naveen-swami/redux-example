import React from 'react';
import '../style.css';
import Home from '../screens/Home';
import { useDispatch } from 'react-redux';

export default function Counter() {
  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <div>
      <Home />
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
