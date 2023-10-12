import React from 'react'
import style from './Logo.module.css'
import platformLogo from '../../assests/platform-logo.svg'

const Logo = () => {
    return (
        <>
            <img src={platformLogo} alt={platformLogo} />
        </>
    )
}

export default Logo
