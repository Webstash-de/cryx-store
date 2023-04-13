import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';

import { ReactComponent as CryxLogo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CryxLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
