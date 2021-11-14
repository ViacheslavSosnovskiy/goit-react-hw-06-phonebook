import s from "./filter.module.css";
import {useSelector, useDispatch} from 'react-redux'
import {getFilter} from '../../redux/contacts/contacts-selectors'
import contactsActions from '../../redux/contacts/contacts-actions'

export default function Filter() {
const value = useSelector(getFilter)
const dispatch = useDispatch()

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

// const mapStateToProps = (state) => ({
//   value: state.contacts.filter,
// })

// const mapDispatchToProps = dispatch => ({
//   onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
