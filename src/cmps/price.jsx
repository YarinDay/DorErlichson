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
                        350
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
                        300
                    </div>
                </div>
                <div className='price-content'>מסלול ליווי אישי אונליין התחייבות לשישה חודשים</div>
                <button onClick={() => {
                    onTogglePriceDetails(true)
                    getPriceDetailsId(1)
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
                        275
                    </div>
                </div>
                <div className='price-content'>מסלול ליווי אישי אונליין התחייבות לשנה</div>
                <button onClick={() => {
                    onTogglePriceDetails(true,)
                    getPriceDetailsId(2)
                }} style={{ backgroundColor: 'darkorange' }}>לפרטים נוספים</button>
            </div>
        </div>
    )
}