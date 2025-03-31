import React from 'react'


export function ProgramPrice() {
    return (
        <div className='program-price-container'>
            <div className='program-price'>
                <div className='program-price-header' style={{ color:'darkorange' }}>
                    <div className='program-price-per-month'>
                        <div>400₪</div>
                    </div>
                </div>
                <div className='program-price-content'>תוכנית אימונים מותאמת אישית ליעדים שלך הכוללת סרטוני הדגמה</div>
            </div>
            <div className='program-price'>
                <div className='program-price-header' style={{ color: 'darkorange' }}>
                    <div className='program-price-per-month'>
                        <div>400₪</div>
                    </div>
                </div>
                <div className='program-price-content'>תפריט תזונת ספורט מותאם אישית ליעדים ולהרגלים שלך</div>
            </div>
        </div>
    )
}