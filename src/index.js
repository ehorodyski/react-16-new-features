import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = (props) => {

  const [count, setCount] = useState(props.count);
  const [label, setLabel] = useState(props.label);

  return (
    <div>
      <p>The current {label} is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
    </div>
  );
};
App.defaultProps = { count: 0, label: 'count' };

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
