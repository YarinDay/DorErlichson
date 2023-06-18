import React, { useEffect, useState } from 'react'
import { ReviewPreview } from './review-preview'
import { Carousel } from 'react-responsive-carousel';

export const ReviewList = () => {
    const [width, setWindowWidth] = useState(0)

    useEffect(() => {
        updateDimensions();
        window.addEventListener(`resize`, updateDimensions);
        return () =>
            window.removeEventListener(`resize`, updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    const condition = width <= 760 ? 100 : 33
    return (
        <div className="review-list">
            <Carousel className='carousel1' autoPlay infiniteLoop centerMode centerSlidePercentage={condition}>
                <div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    )
}