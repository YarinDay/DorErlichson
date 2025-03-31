import React from 'react'
import { MoreInfoButton } from "./MoreInfoButton.jsx"

export function Price({ onTogglePriceDetails, getPriceDetailsId }) {
    return (
        <div className='price-container'>
            <div className='price'>
                <div className='price-header' style={{ color: 'darkorange' }}>
                    <div className='price-per-month'>
                        <div>
                            ₪
                        </div>
                        <div>
                            לחודש
                        </div>
                    </div>
                    <div className='price-amount'>
                        450
                    </div>
                </div>
                <div className='price-content'>מסלול ליווי אישי אונליין התחייבות לשלושה חודשים</div>
                <MoreInfoButton onTogglePriceDetails={onTogglePriceDetails} getPriceDetailsId={getPriceDetailsId} index={0} />
            </div>
            <div className='price'>
                <div className='price-header' style={{ color: 'darkorange' }}>
                    <div className='price-per-month'>
                        <div>
                            ₪
                        </div>
                        <div>
                            לחודש
                        </div>
                    </div>
                    <div className='price-amount'>
                        400
                    </div>
                </div>
                <div className='price-content'>מסלול ליווי אישי אונליין התחייבות לשישה חודשים</div>
                <MoreInfoButton onTogglePriceDetails={onTogglePriceDetails} getPriceDetailsId={getPriceDetailsId} index={1} />
            </div>
        </div>
    )
}