import css from './Filter.module.css'
import PropTypes from 'prop-types'; 

const Filter = ({handleNameInput}) => {
    
    return (
            <input type="text" name="filter" onChange={handleNameInput} placeholder='Search by name' className={css.filterContact}/>
        )
    }
    
    Filter.propTypes = {
        handleNameInput: PropTypes.func.isRequired,
    }
    
    export { Filter }
