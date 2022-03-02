import {HeaderProps} from "./Header.props";
import styles from './Header.module.css';
import Logo from '../logo.svg';
import cn from 'classnames';
import {ButtonIcon} from "../../components/ButtonIcon/ButtonIcon";
import {motion, useReducedMotion} from "framer-motion";
import {Sidebar} from "../Sidebar/Sidebar";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const Header = ({className, ...props}:HeaderProps):JSX.Element => {

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const shouldReuceMotion = useReducedMotion();
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    useEffect(() => {
        document.body.style.overflow = isOpened ? 'hidden' : 'auto';
    }, [isOpened]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transaction: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shouldReuceMotion ? 1 : 0,
            x: '100%',

        }
    }

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo/>
            <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)}/>
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar/>
                <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
}