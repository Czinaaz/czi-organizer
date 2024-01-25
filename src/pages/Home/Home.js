import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <div >
          <p className={css.logg}>Welcome to Phonebook, {user.name}!</p>
          <p>
            To see phone numbers  go to {' '}
            <Link className={css.link} to="/contacts">
            contacts
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <p className={css.logg}>Welcome to Phonebook !</p>
          <p>
            Please{' '}
            <Link to="/login" className={css.link}>
              login
            </Link>{' '}
            or{' '}
            <Link className={css.link} to="/register">
              register
            </Link>{' '}
          </p>
        </div>
      
      )}
    </div>
  );
}