import React, { useEffect, useState } from 'react'

const HookCounterFive = ()=>{
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{ // get executed after every render || get executed if the dependent state value changes
        console.log('useEffect - Updating document title');
        document.title = `You clicked ${count} times`
    },[count])
    const buttonClicked = () =>{
        setCount(prevState => prevState + 1)
    }
    return (
        <div>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
            <button onClick={buttonClicked}>Click {count} times</button>
        </div>
    )
}

export default HookCounterFive