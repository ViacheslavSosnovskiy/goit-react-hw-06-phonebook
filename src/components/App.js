import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <h3>Add contacts</h3>
      <ContactForm />

      <h3>Contacts</h3>
      <Filter />
      <div className={s.wrapper}>
        <ContactList />
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  );
}

// const addContact = ({ name, number }) => {
  //   const person = [
  //     {
  //       id: uuidv4(),
  //       name,
  //       number,
  //     },
  //   ];

  //   if (contacts.some((contact) => contact.name === person.name)) {
  //     toast.error("This contact is already exist ! Try one more time, please!");
  //     return;
  //   }

  //   setContacts((prevContacts) => [...person, ...prevContacts]);
  // };

  // const deleteContact = (id) => {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };