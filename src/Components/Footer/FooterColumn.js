import styles from "./FooterColumn.module.css";
export default function FooterColumn({ columnTitle, ListItem, children }) {
  return (
    <div className={styles.FooterColumn}>
      <h3>{columnTitle}</h3>
      <ul>
        {ListItem.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {children}
    </div>
  );
};
