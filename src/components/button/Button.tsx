'use client';
import classNames from 'classnames';
import styles from './Button.module.css';

type Props = {
    title: string;
    additionalStyle?: any;
    click?: any;
    role?: string;
    path?: string;
};
const Button = ({ title, role, click, path }: Props) => {
    const btnClass = classNames(styles.btn, {
        [styles.darkBackground]: role === 'signup',
        [styles.defaultBackground]: role === 'default',
    });

    const clickHandler = (e: any) => {
        e.preventDefault();
        console.log('button clicked');
        if (path) window.location.href = path;
        if (click) click();
    };

    return (
        <button className={btnClass} onClick={clickHandler}>
            {title}
        </button>
    );
};

export default Button;
