import {Link, Outlet} from 'react-router-dom'
import Header from './Header';

type Props = {}

const Layout = () => {
  return (
    <>
      <Header/>

      <Outlet />
    </>
  );
};

export default Layout