import s from "./contact.module.css";
import {connect} from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-actions'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contact}>
      {contacts.map((contact) => (
        <li key={contact.id} {...contact} className={s.item}>
           <p className={s.name}>{contact.name}</p>
           <p>{contact.number}</p>
           <button className={s.button} onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
// const mapStateToProps = state => ({
//   const {filter, items} = state.contacts;
//   const visibleContacts = getVisibleContacts(items, filter)
//   return {constacts: visibleContacts}
// })

const mapStateToProps = ({contacts: {items, filter}}) => ({
  // contacts: getVisibleContacts(state.contacts.items, state.contacts.filter)
  contacts: getVisibleContacts(items, filter)
}) 

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
