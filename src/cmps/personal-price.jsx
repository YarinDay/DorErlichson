import React from 'react'


export function PersonalPrice() {
    return (
        <div className='personal-price-container'>
            <div className='personal-price'>
                <div className='personal-price-header' style={{ color: 'darkorange' }}>
                    <div className='personal-price-per-month'>
                        <div>220₪ לשעה אימון זוגי</div>
                    </div>
                </div>
                <div className='personal-price-content'>*210₪ לשעה בקניית כרטיסייה של 10 אימונים</div>

            </div>
            <div className='personal-price'>
                <div className='personal-price-header' style={{ color: 'darkorange' }}>
                    <div className='personal-price-per-month'>
                        <div>150₪ לשעה אימון אישי</div>
                    </div>
                </div>
                <div className='personal-price-content'>*145₪ לשעה בקניית כרטיסייה של 10 אימונים</div>

            </div>
        </div>
    )
}