import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SideMenu from '../../components/SideBar';

const HomePageLayout = ({ children, withoutHeader = false }) => {
  return (
    <React.Fragment>
    { !withoutHeader && <Header /> }
      <SideMenu>
        <div className='p-0 bg-white'>
          <main>{children}</main>
        </div>
        <Footer />
      </SideMenu>
    </React.Fragment>
  );
};
export default HomePageLayout;