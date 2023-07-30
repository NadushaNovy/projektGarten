import React from "react";
import s from "./index.module.css";
import Iframe from "react-iframe";
import insta from "./images/insta.png";
import viber from "./images/viber.png";

export default function Footer() {
  return (
    <div className={["wrapper", s.footer].join(" ")}>
      <div className={s.media}>
        <div className={s.contacts}>
          <h2>Contact</h2>
          <p className={s.num_tel}>+49 999 999 99 99</p>
          <div className={s.soc_media}>
            <a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              className={s.inst}
            >
              <img src={insta} alt="" />
              instagram
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=4999999999"
              target="_blank"
              className={s.w_a}
            >
              <img src={viber} alt="" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className={s.adress}>
          <h2>Adress</h2>
          <a href="https://goo.gl/maps/oV62u3fFuYGG9NjYA" target="_blank">
            Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
          </a>
          <p>Working Hours:</p>
          <h4>24 hours a day</h4>
        </div>
      </div>

      <div className={s.map}>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792383!2d13.372469776195656!3d52.50793287205794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1687806497071!5m2!1sru!2sde"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
    </div>
  );
}
