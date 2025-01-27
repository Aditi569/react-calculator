import styles from  "../components/Display.module.css";
const Display = ({displayValue}) => {
    return(
        <>
        <input className={styles.display} type="text" value={displayValue} readOnly/>
        </>
    )
}

export default Display;