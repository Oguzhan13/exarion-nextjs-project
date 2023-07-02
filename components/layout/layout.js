import { Fragment } from 'react';

import MainHeader from './main-header';

function Layout(props) {
  return (
    <Fragment>
      {/* Ana başlık bileşeni*/}
      <MainHeader />
      {/* Ana içerik */}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
