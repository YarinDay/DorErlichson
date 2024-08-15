import React from 'react'


export function ReviewPreview({ review }) {
    return (
        <div className="review-preview">
            <p>{review?.review}</p>
            <div>
                <span className={`fa fa-star ${review.stars >= 1 ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${review.stars >= 2 ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${review.stars >= 3 ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${review.stars >= 4 ? 'checked' : ''}`}></span>
                <span className={`fa fa-star ${review.stars >= 5 ? 'checked' : ''}`}></span>
            </div>
        </div>
    )
}