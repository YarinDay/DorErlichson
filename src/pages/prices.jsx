import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PersonalPrice } from '../cmps/personal-price';
import { Price } from '../cmps/price';
import { PriceDetails } from '../cmps/price-details';
import { ProgramPrice } from '../cmps/program-price';

export function Prices() {
    const [isPriceOpen, setIsPriceOpen] = useState(false)
    const [isPersonalPriceOpen, setIsPersonalPriceOpen] = useState(false)
    const [isProgramPriceOpen, setIsProgramPriceOpen] = useState(false)
    const [isPriceDetailsOpen, setIsPriceDetailsOpen] = useState(false)
    const [priceId, setPriceId] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const getPriceDetailsId = (id) => {
        setPriceId(id)
    }

    const onTogglePriceDetails = (res, ev) => {
        ev?.stopPropagation()
        setIsPriceDetailsOpen(res)
    }

    const onTogglePrice = () => {
        setIsPriceOpen(!isPriceOpen)
    }

    const onTogglePersonalPrice = () => {
        setIsPersonalPriceOpen(!isPersonalPriceOpen)
    }

    const onToggleProgramPrice = () => {
        setIsProgramPriceOpen(!isProgramPriceOpen)
    }
    return (
        <div className="app-home main-view main-layout project-section">
            <div className='headline-container prices-page'>
                <button onClick={onTogglePrice} className='price-btn'>מסלולי ליווי אישי אונליין</button>

                {isPriceOpen && <Price getPriceDetailsId={getPriceDetailsId} onTogglePriceDetails={onTogglePriceDetails} />}
                {isPriceDetailsOpen && <PriceDetails priceId={priceId} onTogglePriceDetails={onTogglePriceDetails} />}
                <button onClick={onTogglePersonalPrice} className='price-btn'>אימונים אישיים/זוגיים</button>
                {isPersonalPriceOpen && <PersonalPrice />}
                <button onClick={onToggleProgramPrice} className='price-btn'>תוכנית אימון/תזונה מותאם אישית</button>
                {isProgramPriceOpen && <ProgramPrice />}

            </div>
            <NavLink to='/' className={'back-btn text-decoration'}><span>חזור</span></NavLink>
        </div>
    )

}