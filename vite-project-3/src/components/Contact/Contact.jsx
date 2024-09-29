import styles from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
      <li className={styles.contact}>
          <div>
                <p className={styles.contactId}>{id}</p>
                <p>{name}</p>
                <p>{number}</p>
          </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
}

export default Contact;