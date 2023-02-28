import styles from '../button UI/buttonModule.css';

export const CustomButton = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.btn}`}>
      <span>{text}</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10"></svg>
    </button>
  );
};
