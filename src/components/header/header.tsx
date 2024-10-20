'use client';
import Link from 'next/link';
import styles from './header.module.css';

function Header(data: any) {
    const storeData = data.data;
    console.log(storeData);
    const clickHandler = () => {
        window.location.href = '/';
    };
    const isLandingPage = false;
    return (
        <div className={styles.container}>
            <div className={styles.logo} onClick={clickHandler}>
                Action Planner
            </div>
            {storeData.isLoggedIn && !isLandingPage && (
                <ul className={styles.itemContainer}>
                    <li className={styles.item}>
                        <Link href='/home'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='/finder'>New Planning</Link>
                    </li>
                </ul>
            )}

            {isLandingPage && (
                <Link href='/signup'>
                    <div className={styles.getStarted}>
                        <span>Get Started</span>
                    </div>
                </Link>
            )}
        </div>
    );
}
export default Header;
