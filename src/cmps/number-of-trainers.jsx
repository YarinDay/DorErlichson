import React, { useEffect, useState } from 'react';

export function NumberOfTrainers() {
    const [countTrainers, setCountTrainers] = useState(0);

    useEffect(() => {
        let interval;

        if (countTrainers < 200) {
            interval = setInterval(() => {
                setCountTrainers(prevCount => {
                    if (prevCount >= 200) {
                        clearInterval(interval);
                        return prevCount;
                    }
                    return prevCount + 1;
                });
            }, 10);
        } else if (countTrainers < 235) {
            interval = setInterval(() => {
                setCountTrainers(prevCount => {
                    if (prevCount >= 235) {
                        clearInterval(interval);
                        return prevCount;
                    }
                    return prevCount + 1;
                });
            }, 50);
        }
        else {
            interval = setInterval(() => {
                setCountTrainers(prevCount => {
                    if (prevCount >= 250) {
                        clearInterval(interval);
                        return prevCount;
                    }
                    return prevCount + 1;
                });
            }, 100);
        }


        return () => clearInterval(interval);
    }, [countTrainers]);

    return (
        <div className='counter-display'>
            {countTrainers}{countTrainers >= 250 && <div>+</div>}
        </div>
    );
}
