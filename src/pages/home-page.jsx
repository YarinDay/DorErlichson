import React, { useEffect, useState } from 'react'
import { ReviewList } from '../cmps/review-list'
import WeightSvg from '../cmps/svg/weight'
import HappySvg from '../cmps/svg/happy'
import EnergySvg from '../cmps/svg/energy'
import process1 from "../assets/img/trainers/process1.png"
import process2 from "../assets/img/trainers/process4.png"
import weightPng from "../assets/img/weight2.png"
import { NavLink } from 'react-router-dom'
import { NumberOfTrainers } from '../cmps/number-of-trainers'

export function HomePage() {
    const [isReadMore, setIsReadMore] = useState(false)

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])

    const onToggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    return (
        <div className="app-home main-view main-layout home-section">
            <div className='headline-container home-img'>
                <div className='fade-pic'></div>
                <div className='info-container'>
                    <div className='counter-container'>
                        <img src={weightPng} alt='' />
                        <NumberOfTrainers />
                        כמות האנשים שאימנתי
                        <a className='link-same-page' href='#details' onClick={() => {
                        }}>להשארת פרטים
                        </a>
                    </div>
                    {/* <div className='info'>ball 3</div> */}
                </div>
            </div>
            <div className='quotes-container'>
                <div className='quote'>
                    <WeightSvg />
                    <div className='headline-p'>כאב הוא <span>זמני</span>, אושר הוא <span>נצחי</span></div>
                    <p>
                        "בשביל להיראות טוב כמו 5% מהאולוכסיה אתה צריך לעשות מה ש95% לא מוכנה לעשות."
                    </p>
                    <hr />
                </div>
                <div className='quote'>
                    <EnergySvg />
                    <div className='headline-p'>תמשיך <span> להקפיד</span></div>
                    <p>
                        "זה לא הופך לקל יותר זה אתה נהייה חזק יותר."
                    </p>
                    <hr />
                </div>
                <div className='quote'>
                    <HappySvg />
                    <div className='headline-p'>תמשיך <span> לחייך</span></div>
                    <p>
                        "להנות זה חלק מהתהליך אל תשכח לחייך."
                    </p>
                    <hr id='about' />
                </div>
            </div>
            <div className={`coach-img ${isReadMore && `open`}`}>
                <div className={`fade-pic ${isReadMore && `open`}`}></div>
                <div className='about-container'>
                    <h1>קצת על עצמי</h1>
                    <p>
                        אני דור ארליכסון
                        אני מאמן כושר מקצועי אבל מעבר לזה אכפת לי.
                        <br />
                        <br />
                        הייתי פעם במצב שלא אהבתי מה שראיתי במראה והבטחתי לעצמי שאני אעזור לכל אחד שירצה שינוי.
                        {isReadMore && <div className='read-more-container'>
                            <br />

                            רוב חיי עסקו סביב ספורט, עסקתי בג׳ודו, כדורגל באופן מקצועי, ואז הגעתי לחדר כושר.
                            <br />
                            <br />

                            התחלתי בתור ילד רזה וקטן ומאוד רציתי לבנות את הגוף השרירי האידיאלי ובעיקר לשבור את המחסום שלי.
                            <br />
                            <br />

                            לאט לאט למדתי והבנתי איך אפשר לפתח את הגוף שלך -
                            ממצב רזה וחלש לבריא גדול וחזק, איך להפוך את הגוף מרופס ומלא לחטוב מוצק ועוצמתי.
                            <br />
                            <br />

                            אחרי שנים בתחום בהם למדתי הרבה והתקדמתי, החלטתי שאני רוצה ויכול לעזור גם לאנשים אחרים לשנות את הגוף שלהם, ולהרגיש טוב עם עצמם.
                            <br />
                            <br />

                            זה מתחיל מתהליך פיזי וממשיך לתהליך נפשי שבסופו המטרה היא לאהוב את עצמך ואת הגוף שלך ולהבין שאין מחסום.
                            <br />
                            <br />

                            אם אתה רוצה את זה ופועל למען זה- אתה תשיג את זה!

                        </div>}
                    </p>
                    <div className='read-more-container-btn'>
                        <button onClick={onToggleReadMore}>{isReadMore ? 'קרא פחות...' : 'קרא עוד...'}</button>
                        {/* <NavLink className={`text-decoration`} to='/about' ><span>קרא עוד..</span></NavLink> */}
                    </div>
                </div>
            </div>
            <hr style={{ width: "90vw" }} />
            <NavLink className='price-btn text-decoration' to='/prices'><span>לעמוד המחירים</span></NavLink>
            <hr style={{ width: "90vw" }} />
            <NavLink className='price-btn text-decoration' to='/calculator'><span>מחשבון הוצאה קלורית יומית</span></NavLink>
            <hr style={{ width: "90vw" }} />
            <div className='progress-headline'>תהליכים</div>
            <div id='projects' className='trainers-process'>
                <div>
                    <img src={process1} alt='' />
                    <img src={process2} alt='' />
                </div>
                <NavLink className={`text-decoration`} to='/projects'><span>טען עוד..</span></NavLink>
            </div>
            <div id='details'></div>
            {/* <ReviewList /> */}

        </div>

    )

}