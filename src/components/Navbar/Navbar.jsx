import React from 'react';
import style from './Navbar.module.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

const Navbar = ({ data }) => {
    return (
        <div className={style.navbar}>
            <Logo />
            <SearchBar data={data} />
            <Button />
        </div>
    );
};

export default Navbar;
