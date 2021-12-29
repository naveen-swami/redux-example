import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  useSelector((state) => console.log(state));
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <div>
      <h3>Count {count}</h3>
    </div>
  );
}

export default Home;
