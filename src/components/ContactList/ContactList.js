import s from "./contact.module.css";
import {useSelector, useDispatch} from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-actions'
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts)
  const dispatch = useDispatch()


  return (
    <ul className={s.contact}>
      {contacts.map((contact) => (
        <li key={contact.id} {...contact} className={s.item}>
           <p className={s.name}>{contact.name}</p>
           <p>{contact.number}</p>
           <button className={s.button} onClick={() => dispatch(contactsActions.deleteContact(contact.id))}>
        Delete
      </button>
        </li>
      ))}
    </ul>
  );
};

// const mapStateToProps = state => ({
//   const {filter, items} = state.contacts;
//   const visibleContacts = getVisibleContacts(items, filter)
//   return {constacts: visibleContacts}
// })

// const mapStateToProps = ({contacts: {items, filter}}) => ({
//   // contacts: getVisibleContacts(state.contacts.items, state.contacts.filter)
//   contacts: getVisibleContacts(items, filter)
// }) 

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsActions.deleteContact(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
