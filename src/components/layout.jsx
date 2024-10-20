'use client';
import { cloneElement } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

// async function getData() {
//   const data = {
//     isLoggedIn: true,
//     isLandingPage: false
//   }

//   return data;
// }

const Layout = async ({ children }) => {
  // const data = await getData();
  const data = {
    isLoggedIn: true,
  }

  return (
    <>
      <Header data={data} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;