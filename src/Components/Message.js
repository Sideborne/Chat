import React from 'react';
import styles from './styles.module.css';

function Message({ myText }) {
    return <h2 className={styles.text}>This now here is {myText}</h2>
};

export default Message;