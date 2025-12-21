import styles from "./empty.module.css";

export default function Empty() {
  return (
    <div className={styles.empty}>
      <p>No tasks yet </p>
      <span>Add your first todo</span>
    </div>
  );
}
