import styles from './page.module.css';
import Button from '@/components/button/Button';
import Layout from '@/components/layout';

const Signup = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.signupContainer}>
          <div className={styles.formContainer}>
            <p className={styles.heading}>Create Account</p>
            <form>
              <div className={styles.inputContainer}>
                <label htmlFor="username">Username</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="text" className={styles.input} />
              </div>
              <Button title='Create Account' role='signup' />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Signup