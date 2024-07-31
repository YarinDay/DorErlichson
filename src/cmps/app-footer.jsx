
import React from 'react'
// import mainLogo from "../assets/img/AY-logo.webp"

export class AppFooter extends React.Component {

    render() {
        return (<>
            <hr style={{ width: "90vw" }} />

            <div className="main-footer-container full">
                <div className='fade-pic'></div>
                <form id="containingDiv7eaada0" className="fc_container type-button field-inside fc-form" action="https://panel.sendmsg.co.il/AddUserFromSite.aspx" method="post" target="stay_iframe" lang="heb" height="300" width="450" dark-bg="true" max-width="450px">
                    <h1>השאירו פרטים כאן</h1>
                    <div align="center" cellSpacing="0" className="fc_base table fc-div-struct"><div className="tbody"><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"><span className="fc-must-star"></span></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="text" id="1" name="1" data-fc-type="text" className="fc_input_text" data-fc-id="1" data-fc-must-fill="true" placeholder="שם" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"></div><div className="td fc-cell fc-cell-field"><input style={{ direction: "rtl" }} maxLength="250" type="tel" id="cellphone" name="cellphone" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="cellphone" placeholder="סלולרי" /></div></div><div className="tr fc-row fc-row-field"><div className="td fc-cell fc-cell-text"></div><div className="td fc-cell fc-cell-field"><input maxLength="250" type="email" id="email" name="email" data-fc-type="text" className="fc_input_text key-up-ltr" data-fc-id="email" placeholder="מייל" /></div></div><div className="tr fc-button-row fc-hidden-row fc-colspan"><div colSpan="2" className="td fc-cell-text"><input value="שליחה" className="MustField fc_button" type="submit" /><input type="hidden" className="MustField" name="form" value="325678__b234fbb6-65e9-4152-a838-a9f62a5befd6" data-fc-id="form" /></div></div></div>
                        <script type="text/javascript" src="https://app.creaditor.com/formCreator/assets/fc-basics.min.js"></script>
                    </div>
                </form>
            </div>
        </>
        )
    }
}