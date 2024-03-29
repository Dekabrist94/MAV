import styleMedia from '../../Media.module.css';
import styles from './Button.module.css';
import React from 'react';

export const CustomButton = ({ type, text, link, style }) => {
  if (style === 'btn') {
    return (
      <button
        className={`${styles.button} ${styles.buttonBtn} ${styleMedia.button} ${styleMedia.buttonBtn}`}
        type={type}>
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    );
  } else if (style === 'link') {
    return (
      <a
        href="https://wa.me/+393519741841"
        className={`${styles.button} ${styles.buttonLink}`}
        target="_blank"
        rel="noreferrer">
        <span>{text}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    );
  }
  return <button>{text}</button>;
};
