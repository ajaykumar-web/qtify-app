import React from 'react';
import style from './FAQs.module.css';
import Accordion from '../Accordion/Accordion';
const FAQs = () => {
    return (
        <>
            <h1 className={style.faqs}>FAQs</h1>
            <Accordion />
        </>
    );
};

export default FAQs;
