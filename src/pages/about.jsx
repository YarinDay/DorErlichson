import React from 'react'
import { NavLink } from 'react-router-dom'

export function About() {
    
    return (
        <div className="app-home main-view main-layout">
            <div className='about-text headline-container'>
                <div className='coach-img'>
                    <div className='fade-pic'></div>
                    <div className='about-container'>
                        <h1>קצת על עצמי</h1>
                        <p>
                            אני דור ארליכסון
                            אני מאמן כושר מקצועי אבל מעבר לזה אכפת לי.
                            הייתי פעם במצב שלא אהבתי מה שראיתי במראה והבטחתי לעצמי שאני אעזור לכל אחד שירצה שינוי.
                            <br />
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

                        </p>
                        <div className='back-btn-container'>
                            <NavLink to='/' className={'back-btn text-decoration'}><span>חזור</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )

}