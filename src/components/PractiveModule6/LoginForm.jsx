import { useDispatch } from "react-redux";
import { logIn } from "redux/loginPage/userSlice";
import {useNavigate} from 'react-router-dom'

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logIn(e.currentTarget.elements.email.value))
        e.currentTarget.reset();
        navigate('/dashboard', {replace: true})
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button type="submit">LogIn</button>
    </form>
    )
}