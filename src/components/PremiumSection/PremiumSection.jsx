import React, { useState } from 'react';
import Button from '../Button/Button';
import classes from './PremiumSection.module.css'

const PremiumSection = () => {
    const [value, setValue] = useState('');
    const [showId, setShowId] = useState(false); // Состояние для отображения надписи "Твой id:"

    // Функция-обработчик для изменения состояния value при изменении значения в инпуте
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // Функция-обработчик для отправки значения при нажатии на кнопку
    const handleSubmit = () => {
        // В этом месте вы можете передать значение, куда вам нужно
        console.log(value); // Например, выведем значение в консоль
        setShowId(true); // Показываем надпись "Твой id:"
    };

    return (
        <div className={classes.bgcolor}>
            <div className={classes.container}>
                <h2>Покупка премиума</h2>
                <div className={classes.inputContainer}>
                    <input className={classes.input} placeholder='Введите игровой ID' type='text' value={value} onChange={handleChange}/>
                    <Button name='Купить' onClick={handleSubmit} style={null}/>
                </div>
                {showId && <div>Пошёл нахуй {value}</div>}
            </div>
        </div>
    );
}

export default PremiumSection;
