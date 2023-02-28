import styles from '../button UI/buttonModule.css';

export const CustomButton = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.btn}`}>
      <span>{text}</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
};
