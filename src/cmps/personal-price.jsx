import React from 'react'


export function PersonalPrice() {
    return (
        <div className='personal-price-container'>
            <div className='personal-price'>
                <div className='personal-price-header' style={{ color: 'darkorange' }}>
                    <div className='personal-price-per-month'>
                        <div>230₪ לשעה אימון זוגי</div>
                    </div>
                </div>
            </div>
            <div className='personal-price'>
                <div className='personal-price-header' style={{ color: 'darkorange' }}>
                    <div className='personal-price-per-month'>
                        <div>170₪ לשעה אימון אישי</div>
                    </div>
                </div>
            </div>
        </div>
    )
}