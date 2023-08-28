import styles from "./Select.module.css";

function Select({ text, option, name, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione a categoria</option>
      </select>
    </div>
  );
}

export default Select;
