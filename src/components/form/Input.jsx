import styles from './Input.module.css'

function Input({ value, placeholder, type, text, name}){
return (<div className={styles.form_control}>
    <label htmlFor={name}> {text}</label>
    <input type={type} placeholder={placeholder} name={name} id={name}> 
</input></div>)
}
export default Input