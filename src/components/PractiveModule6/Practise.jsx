import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from '../../redux/store'

export const Practise = () => {

    // useSelevtor треба щоб отримати із стейту якийсь шматок, наприклад myValue
    const value = useSelector(state => state.myValue)
    const dispatch = useDispatch();

    return <div>
        <p>{value}</p>
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
}