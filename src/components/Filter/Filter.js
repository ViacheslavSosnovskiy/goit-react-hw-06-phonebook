import s from "./filter.module.css";
import {connect} from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-actions'

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
