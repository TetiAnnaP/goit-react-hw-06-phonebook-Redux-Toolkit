import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ContactList = ({ handleDeleteContact }) => {
  const [visibleContacts, setVisibleContacts] = useState([]);

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const handleDeleteBtn = e => {
    handleDeleteContact(e.target.id);
  };

  useEffect(() => {
    localStorage.setItem('userContacts', JSON.stringify(contacts));

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    setVisibleContacts(filteredContacts);
  }, [contacts, filter]);

  return (
    <ul className={css.ul}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.li} key={nanoid()}>
            <p className={css.text}>
              {contact.name}: {contact.number}
            </p>
            <button
              className={css.sbmBtn}
              type="button"
              id={contact.id}
              onClick={handleDeleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
