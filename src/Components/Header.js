import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='page_header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/tab1'>Tab1</Link>
                </li>
                <li>
                    <Link to='/tab2'>Tab2</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/logout'>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;