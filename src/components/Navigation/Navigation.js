import { Loader } from 'components/loader/loader';
import { useAuth } from 'hooks';
import { lazy, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';
import { TiHomeOutline } from "react-icons/ti";
import { RiContactsBookLine } from "react-icons/ri";

const UserMenu = lazy(() => import('components/Usermenu/Usermenu'));
// const Tasks = lazy(() => import('pages/Tasks/Tasks'));

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    &.active {
      color: yellow;
      font-size: 28px;
    }
  `;
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            <TiHomeOutline />
          </StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink className={css.nav__link} to="/contacts" end>
                <RiContactsBookLine />
              </StyledLink>
              <StyledLink className={css.nav__link} to="/tasks" end>
                Tasks
              </StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink className={css.nav__link} to="/register" end>
                Register
              </StyledLink>
              <StyledLink className={css.nav__link} to="/login" end>
                Login
              </StyledLink>
            </>
          )}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
        {/* Including the Outlet allows nested routing within the Navigation component */}
      </Suspense>
    </>
  );
}
