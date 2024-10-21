'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import StoreContext from '@/store/StoreContext';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Layout from '@/components/layout';

const Login = () => {
  const router = useRouter();

  const data = {
    email:'john@email.com',
    password: '123',
    isLoggedIn: true
    // redirect the user to the home page
  // Redirect the user to the home page
  }
  const { login } = useContext(StoreContext);

  const onLogin = () => {
    console.log('clicked');
    login(data);
    router.push('/dashboard');
  };

  return (
    <Layout>
    <div className={styles.container}>
        <div className={styles.signupContainer}>
          <div className={styles.formContainer}>
            <p className={styles.heading}>Log In</p>
            <form>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input type="text" className={styles.input} />
              </div>
              <Button title='Log in' role='signup' click={onLogin} />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
