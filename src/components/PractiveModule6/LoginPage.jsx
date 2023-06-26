import { LoginForm } from './LoginForm';
import { UserMenu } from './UserMenu';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
export const LoginPage = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between'
    }}>
      <LoginForm />
      {isLoggedIn && <UserMenu />}
    </div>
  );
};
