"use client";
import { useContext } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import StoreContext from '@/store/StoreContext';

function Header() {
  const { user } = useContext(StoreContext);
  console.log(user);
  const clickHandler = () => {
    window.location.href = "/";
  };
  const isLandingPage = false;
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={clickHandler}>
        Action Planner
      </div>
      {user.isLoggedIn && !isLandingPage && (
        <ul className={styles.itemContainer}>
          <li className={styles.item}>
            <Link href="/home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/profile">Profile</Link>
          </li>
          <li className={styles.item}>
            <Link href="/planner">New Planning</Link>
          </li>
          <li className={styles.item}>
            <Link href="/my-plans">My Plans</Link>
          </li>
        </ul>
      )}

      {isLandingPage && (
        <Link href="/signup">
          <div className={styles.getStarted}>
            <span>Get Started</span>
          </div>
        </Link>
      )}
    </div>
  );
}
export default Header;
