import { useSelector, useDispatch } from "react-redux"
import { logOut } from "redux/loginPage/userSlice";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.login)

    return (
        <div>{user}<button type="button" onClick = {() => dispatch(logOut())}>LogOut</button></div>
    )
}