import React, { useEffect, useState } from 'react'


export function NumberOfTrainers() {
    var [countTrainers, setCountTrainers] = useState(0)
    useEffect(() => {
        setInterval(() => {
            if (countTrainers > 50) return
            setCountTrainers(countTrainers++)
        }, 50);
    }, [])
    return (
        <div className='counter-display'>
            {countTrainers}{countTrainers >= 50 && <div>+</div>}
        </div>
    )
}