import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


export default function ContactList ({contacts}){
    return(
        <div className={css.contacts}>
            <ul className={css.list}>
                {contacts.map(({id, name, number}) => (
                    <Contact key={id} name={name} number={number}/>

                ))}
               
            </ul>
        </div>
    )
}