import { FaUser, FaPhone} from 'react-icons/fa'
import css from './Contact.module.css'

export default function Contact({ name, number }) {
    return (
        <div className={css.contact}>
        <li className={css.card}>
            <p><FaUser className={css.icon}/>{name}</p>
            <p><FaPhone className={css.icon}/>{number}</p>
        </li>
        <button>Delete</button>
    </div>
    );
}