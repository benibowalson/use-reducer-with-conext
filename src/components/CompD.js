import React, { useContext } from 'react'
import { CountContext } from '../App'

const CompD = () => {
    const myCountContext = useContext(CountContext)
    return (
        <div>
            Component D: Count = {myCountContext.providedCountState.count} &nbsp;
            <button onClick={() => myCountContext.providedDispatch('INCREMENT')}>Increment</button>
            <button onClick={() => myCountContext.providedDispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => myCountContext.providedDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default CompD
