import styles from './Button.module.css';
const Button = ({isoutline,icon,text}) =>{
    return(
        <button className={isoutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text} 
        </button>
    );
};
export default Button;