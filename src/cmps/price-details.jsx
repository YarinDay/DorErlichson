import React from 'react'
import { priceService } from '../services/price.service'


export function PriceDetails({ onTogglePriceDetails, priceId }) {
    const priceCradentials = priceService.getPrices()[priceId]
    return (
        <div className='price-details-container' onClick={(ev) => onTogglePriceDetails(false, ev)}>
            <div className='price-details' onClick={(ev) => onTogglePriceDetails(true, ev)}>
                <button className='btn-close-modal' onClick={(ev) => onTogglePriceDetails(false, ev)}>X</button>
                <div className='price-details-main'>
                    <div className='price-header' style={{ color: priceCradentials.color }}>
                        <div className='price-per-month'>
                            <div>
                                ₪
                            </div>
                            <div>
                                לחודש
                            </div>
                        </div>
                        <div className='price-amount'>
                            {priceCradentials.price}
                        </div>
                    </div>
                    <div className='price-content'>
                        <div className='header'>המסלול כולל:</div>
                        <ul>
                            <li>הצבת יעדים</li>
                            <li>בניית תוכנית אימונים מותאמת אישית</li>
                            <li>בניית תפריט תזונה מותאם אישית</li>
                            <li>מדידות ומעקב התקדמות</li>
                            <li>שינוי והתאמת התוכנית אימון והתפריט בהתאם להתקדמות</li>
                            <li>ליווי צמוד בWhatsapp לשאלות והכוונה יומיומית</li>
                        </ul>
                    </div>
                    {/* <button className='buy-btn' style={{ backgroundColor: priceCradentials.color }}>רכישת מנוי</button> */}
                </div>
            </div>
        </div>
    )
}