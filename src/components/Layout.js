import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Menu } from './Menu';
import { css } from '@emotion/react';

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>自己紹介 de AR</title>
        <meta name="description" content="自己紹介をARで表示します" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <div css={cssMargin} />
      <Menu />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const cssMargin = css`
  margin-top: 56px; // ボトムナビゲーションの高さ
`;
