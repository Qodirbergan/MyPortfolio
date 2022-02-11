import React from "react";
import  instagram from './img/instagram.png';
import  telegram from './img/telegram.png';
import  facebook from './img/facebook.png';
import footerImg from "./img/logo (1).png";
function Footer() {
    return (
        <div
            className="footer d__flex align__items__center justify__content__space__between pz-10"
            style={{ padding: "10px 20px", zIndex: "100" }}
        >
            <a href="#Home"><img src={footerImg} alt="Home" className="footer__img pointer" /></a>

            <span
                className="copyright"
                style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
            >

 <a href="https://instagram.com/mr_qodirbergan?utm_medium=copy_link"><img src={instagram} style={{width:"25px",margin:"-5px 15px "}} alt="error"/></a>
            <a href="https://t.me/Legenda_9262"><img src={telegram} style={{width:"25px",margin:"-5px 15px "}} alt="error"/></a>
            <a href="https://www.facebook.com/qodirbergan.qodirov.98"><img src={facebook} style={{width:"25px",margin:"-5px 15px "}} alt="error"/></a>
        Copyright © 2021 programmer Shahriar Sajeeb. All Rights Reserved.
      </span>
        </div>
    );
}

export default Footer;