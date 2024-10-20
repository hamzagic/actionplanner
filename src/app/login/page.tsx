'use client';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Layout from '@/components/layout';

const Login = () => {
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
              <Button title='Log in' role='signup' />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;