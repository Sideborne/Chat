import style from './styles.module.css';

export function Message({ myText }) {
    return <h2 className={style.text}>This now here is {myText}</h2>
}