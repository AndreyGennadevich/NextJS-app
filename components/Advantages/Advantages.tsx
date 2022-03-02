import {AdvantagesProps} from "./Advantages.props";
import styles from './Advantages.module.css';
import CheckIkon from './check.svg';
import cn from 'classnames';


export const Advantages = ({advantages}:AdvantagesProps): JSX.Element => {
    return (
        <div>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckIkon></CheckIkon>
                    <div className={styles.title}>{a.title}</div>
                    <hr className={styles.vline}/>
                    <div className={styles.description}>{a.description}</div>
                </div>
            ))}
        </div>
    );
};