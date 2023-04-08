import React, { useEffect, useState } from 'react'

const HookMouse = () =>{
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{ // get executed only once
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return (
        <div>
            Hook X - {x} Y - {y}
        </div>
    )
}

export default HookMouse