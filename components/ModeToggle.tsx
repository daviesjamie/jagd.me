import styles from "../styles/ModeToggle.module.css";

export default function ModeToggle() {
  return (
    <div id="mode-toggle" className={styles.modeToggle}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
