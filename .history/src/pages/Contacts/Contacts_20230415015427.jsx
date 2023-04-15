import style from './Contacts.module.css';

import React from 'react';

export const Contacts = () => {
  return (
    <section className={style.contContainer}>
      <div className={style.background}>
        <div className={style.qr}>
          <h1 className={style.contCaption}>Contacts</h1>
          <ul className={style.contacts}>
            <li>
              <a href="https://www.instagram.com/palazzagofotografo/" target="_blank">
                <img
                  className={style.qrcode}
                  src="http://qrcoder.ru/code/?https%3A%2F%2Fwww.instagram.com%2Fpalazzagofotografo%2F&3&0"
                  width="123"
                  height="123"
                  title="Instagram QR Code"
                />
              </a>
              <h4 align="center">Instagram</h4>
            </li>
            <li>
              <a href="https://wa.me/+393519741841" target="_blank">
                <img
                  className={style.qrcode}
                  src="http://qrcoder.ru/code/?https%3A%2F%2Fwa.me%2F%2B393519741841&3&0"
                  width="123"
                  height="123"
                  title="WhatsApp QR Code"
                />
              </a>
              <h4 align="center">WhatsApp</h4>
            </li>
            <li>
              <a href="https://t.me/mavphotographeralex" target="_blank">
                <img
                  className={style.qrcode}
                  src="http://qrcoder.ru/code/?https%3A%2F%2Ftelegram.me%2F%40mavphotographer&4&0"
                  width="123"
                  height="123"
                  title="Telegram QR Code"
                />
              </a>
              <h4 align="center">Telegram</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
