import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import StoreProvider from '@/store/StoreProvider';

export default function Home() {
    return (
      <StoreProvider>
        <Layout>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.heading}>
                        Turn your goals into actionable, step-by-step plans
                    </h1>
                    <div className={styles.btnContainer}>
                        <Link href='/signup'>
                            <Button
                                title='Get started'
                                role='default'
                                path='/signup'
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    {/* <Image src='/img/friends.jpg' fill alt="image" />  */}
                    <img
                        src='/img/friends.jpg'
                        alt='test'
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.subcontainer}>
                <p>Start turning your aspirations into achievements today.</p>
                <div className={styles.loginContainer}>
                    Already have an account?{' '}
                    <Link href='/login' className={styles.login}>
                        Log In
                    </Link>
                </div>
            </div>
        </Layout>
      </StoreProvider>
    );
}
