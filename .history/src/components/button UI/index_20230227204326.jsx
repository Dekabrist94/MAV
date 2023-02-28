import styles from '../button UI/buttonModule.css';

export const CustomButton = () => {
  return (
    <button className={`${styles.button} ${styles.btn}`}>
      <span>{text}</span>
    </button>
  );
};
