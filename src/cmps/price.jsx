import React from 'react'


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
                <button onClick={() => {
                    onTogglePriceDetails(true)
                    getPriceDetailsId(0)
                }} style={{ backgroundColor: 'darkorange' }}>לפרטים נוספים</button>
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
                <button onClick={() => {
                    onTogglePriceDetails(true)
                    getPriceDetailsId(1)
                }} style={{ backgroundColor: 'darkorange' }}>לפרטים נוספים</button>
            </div>
        </div>
    )
}