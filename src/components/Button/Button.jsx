import React from 'react'
import style from './Button.module.css'

const Button = () => {
    return (
        <>
            <button className={style.btn} type="submit">
                Give Feedback
            </button>
        </>
    )
}

export default Button
