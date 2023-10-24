import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ReactComponent as SearchIcon } from '../../assests/searach-icon.svg';
import styles from './SearchBar.module.css';

const SearchBar = ({ data }) => {
    const [val, setVal] = useState(null);
    const changeHandler = (e) => {
        setVal(e.target.value);
    };
    const clickHandler = () => {};
    return (
        <div className={styles.searchBar}>
            <Autocomplete
                className={styles.searchInput}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={data.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                        onChange={changeHandler}
                    />
                )}
            />
            <button className={styles.btn} type="submit" onClick={clickHandler}>
                <SearchIcon />
            </button>
        </div>
    );
};

export default SearchBar;
