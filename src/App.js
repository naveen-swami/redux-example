import React from 'react';
import './style.css';
import Counter from './screens/Counter';
import ReduxWithConnect from './screens/ReduxWithConnect';
import DisplayName from './screens/DisplayName';

export default function App() {
  return (
    <div>
      <h1>Example of React with Redux</h1>
      <ReduxWithConnect />
      <DisplayName />
      <Counter />
    </div>
  );
}
