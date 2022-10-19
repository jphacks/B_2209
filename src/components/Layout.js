import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Menu } from './Menu';

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ARプロフ</title>
        <meta name="description" content="自己紹介をARで表示します" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Menu />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
