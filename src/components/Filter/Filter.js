import s from "./filter.module.css";
import {connect} from 'react-redux'

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

const 

export default connect()(Filter)
// export default Filter;
