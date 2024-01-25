import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        className={css.inputs}
        type="email"
        name="email"
        placeholder="example: user@user.com"
        required
      ></input>
      <label>Password</label>
      <input
        className={css.inputs}
        type="password"
        name="password"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <Button style={{ padding: '15px 50px' }} type="submit">
        Login
      </Button>
    </form>
  );
}