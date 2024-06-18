import React from 'react'
import styles from './navbar.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='container'>
            <nav>
                <Link href='/'>SKELETON<sup>style</sup></Link>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='#'>About</Link></li>
                    <li><Link href='#'>Services</Link></li>
                    <li><Link href='#'>Portfolio</Link></li>
                    <li><Link href='#'>Resume</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header