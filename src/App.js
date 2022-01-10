import React from 'react';
import './App.css';

import { useReducer } from 'react'
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

export const CountContext = React.createContext()

const initialState = { count: 0 }

const myReducer = (state = initialState, action) => {
  switch(action){
    case 'INCREMENT':
      return { count: state.count + 1}
    case 'DECREMENT':
      return { count: state.count - 1}
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function App() {
  const [countState, dispatch] = useReducer(myReducer, initialState)

  return (
    <CountContext.Provider value={{ providedCountState: countState, providedDispatch: dispatch }}>
    <div className="App">
      Hellow Someone <br />
      My Count = {countState.count}
      <CompA />
      <CompB />
      <CompC />
    </div>
    </CountContext.Provider>
  );
}

export default App;
