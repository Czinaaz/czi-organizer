import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/Filter/Filter';
import { Loader } from 'components/loader/loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { selectError, selectIsLoading } from '../../redux/selectors';
import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.one}>
      <h2 className={css.headertext}>Phonebook</h2>
      <ContactsForm></ContactsForm>
      <h2 className={css.headertext}>Contacts</h2>
      <ContactFilter></ContactFilter>
      <ContactList />
      {isLoading && !error && <Loader />}
    </div>
  );
}