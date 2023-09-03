import styles from "./Select.module.css";

function Select({ text, opcao, name, value, handleOnChange }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
        <option>Selecione a categoria</option>
        {opcao.map((option) => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
