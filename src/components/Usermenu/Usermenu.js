import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './Usermenu.module.css';
import { FiLogOut } from "react-icons/fi";
import { Button } from 'components/Button/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.position}>
      <span className={css.greet}>Hi, {user.name}{' '}</span>
      <Button className={css.btn_style} onClick={() => dispatch(logOut())}>
        <FiLogOut viewBox="2 2 20 20" />
      </Button>
    </div>
  );
}