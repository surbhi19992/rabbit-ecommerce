// simport React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
    {/* {Header} */}
    <Header />
    {/* {main content} */}
    <main>
      <Outlet />
    </main>
    
    {/* {footer} */}
    <Footer />
    </>
  );                      
};

export default UserLayout;



// http://localhost:5173/login

