import React from 'react'
import style from './SearchBar.module.css'
import searchIcon from '../../assests/searach-icon.svg'

const SearchBar = () => {
    return (
        <>
            <div className={style.searchBar}>
                <input
                    className={style.searchInput}
                    type="text"
                    placeholder="Search a album of your choice"
                />
                <button className={style.btn}>
                    <img src={searchIcon} alt={searchIcon} />
                </button>
            </div>
        </>
    )
}

export default SearchBar
