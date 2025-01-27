import styles from "../components/Buttons.module.css";

const Buttons = ({onButtonClick}) =>{
    const buttonNames = ['C' , '1' , '2' , '3','+' , '4' , '5' ,'6' ,'-', '7' , '8' , '9' ,'*', '0' , '=' , '.' , '/']
    return(
        <>
         <div className={styles.buttonsContainer}>
         {buttonNames.map((button, index) => (
             <button key={index} className={styles.buttons} onClick={() => onButtonClick(button)}>{button}</button>
         ))}
        </div>
        </>
    )
}

export default Buttons;