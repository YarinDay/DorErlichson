
import React from 'react'
// import mainLogo from "../assets/img/AY-logo.webp"

export class AppFooter extends React.Component {

    render() {
        return (<>
            <hr style={{ width: "90vw" }} />

            <div className="main-footer-container full">

                {/* <div className="fc-form form_325678 type-button rtl" data-form-id="325678-cd6f2624-cefe-65a4-9915-ba3f2f5d0da8-36241">
                    <div id="containingDiv7eaada0" className="fc_container type-button field-inside" data-action="https://panel.sendmsg.co.il/AddUserFromSite.aspx" data-method="post" data-target="stay_iframe" data-lang="heb" data-height="311" data-width="450" data-dark-bg="true" data-max-width="450px"><div className="fc_header"><p style={{ margin: "0" }}><span><strong>מלא פרטים עכשיו למטה ואצור איתך קשר.</strong></span>​​​​​​​</p></div><div align="center" cellSpacing="0" className="fc_base table fc-div-struct"><div className="tbody" ><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"><span className="fc-text">שם</span><div className="td fc-cell fc-cell-field"><input maxLength="250" type="text" id="1" name="1" data-fc-type="text" className="fc_input_text" data-fc-id="1" data-fc-must-fill="true" placeholder="שם" /></div></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"><span className="fc-text">סלולרי</span></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="tel" id="cellphone" name="cellphone" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="cellphone" placeholder="סלולרי" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"><span className="fc-text">מייל</span></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="email" id="email" name="email" data-fc-type="text" className="fc_input_text" data-fc-id="email" placeholder="מייל" /></div></div><div className="tr fc-button-row fc-hidden-row fc-colspan"><div colSpan="2" style={{ paddingTop: "7px" }} className="td fc-cell-text"><input value="שלח" className="MustField fc_button" type="button" onClick={()=>{return submitForm(this)}} /><input type="hidden" className="MustField" name="form" value="325678__b234fbb6-65e9-4152-a838-a9f62a5befd6" data-fc-id="form" /></div></div></div></div></div>
                    <script type="text/javascript" src="https://app.creaditor.com/formCreator/assets/fc-basics.min.js"></script>
                </div> */}
                <div className='fade-pic'></div>
                <form id="containingDiv7eaada0" className="fc_container type-button field-inside fc-form" action="https://panel.sendmsg.co.il/AddUserFromSite.aspx" method="post" target="stay_iframe" lang="heb" height="300" width="450" dark-bg="true" max-width="450px">
                    <h1>השאירו פרטים כאן</h1>
                    <div align="center" cellSpacing="0" className="fc_base table fc-div-struct"><div className="tbody"><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"><span className="fc-must-star"></span></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="text" id="1" name="1" data-fc-type="text" className="fc_input_text" data-fc-id="1" data-fc-must-fill="true" placeholder="שם" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="tel" id="cellphone" name="cellphone" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="cellphone" placeholder="סלולרי" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="email" id="email" name="email" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="email" placeholder="מייל" /></div></div><div className="tr fc-button-row fc-hidden-row fc-colspan"><div colSpan="2" className="td fc-cell-text"><input value="שליחה" className="MustField fc_button" type="submit" /><input type="hidden" className="MustField" name="form" value="325678__b234fbb6-65e9-4152-a838-a9f62a5befd6" data-fc-id="form" /></div></div></div>
                    <script type="text/javascript" src="https://app.creaditor.com/formCreator/assets/fc-basics.min.js"></script>
                    </div>
                </form>

                {/* <form id="containingDiv7eaada0" className="fc_container type-vertical field-inside fc-form" action="https://panel.sendmsg.co.il/AddUserFromSite.aspx" method="post" target="stay_iframe" lang="heb" height="302" dark-bg="true" width="450">
                    <h1>השאירו פרטים כאן</h1>
                    <div align="center" cellspacing="0" className="fc_base table fc-div-struct"><div className="tbody" ><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"><span className="fc-must-star"></span></div><div className="td fc-cell fc-cell-field"><input maxlength="250" type="text" id="1" name="1" data-fc-type="text" className="fc_input_text" data-fc-id="1" data-fc-must-fill="true" placeholder="שם" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"></div><div className="td fc-cell fc-cell-field"><input maxlength="250" type="tel" id="cellphone" name="cellphone" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="cellphone" placeholder="סלולרי" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"></div><div className="td fc-cell fc-cell-field"><input maxlength="250" type="email" id="email" name="email" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="email" placeholder="מייל" /></div></div><div className="tr fc-button-row fc-hidden-row fc-colspan"><div colSpan="2" className="td fc-cell-text"><input value="שלח" className="MustField fc_button" type="submit" /><input type="hidden" className="MustField" name="form" value="325955_470987a7-1535-450a-b438-2676bdad8be5" data-fc-id="form" /></div></div></div></div>
                </form> */}
                {/* <div className='coach-cradentials'>
                    <img src={coachImg} alt='' />
                    <div className='links'>
                        <a className="instagram" href="https://www.instagram.com/dor_erlichson_/"><img src={instagram} alt='' /></a>
                        <a href="https://wa.link/kodd2j"><img src={whatsapp} alt="Loading..." /></a>
                        <a className="phone-call" href="tel:0522249646"><img src={phoneCall} alt="Loading..." /></a>
                    </div>
                </div> */}
            </div>
        </>
        )
    }
}