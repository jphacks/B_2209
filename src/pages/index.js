import * as React from 'react';
import { Header } from '../components/Header';
import HEAD from 'next/head';
import Script from 'next/script';

import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { css } from '@emotion/react';
// import prisma from '../../lib/prisma';
const makeSerializable = (o) => {
  return JSON.parse(JSON.stringify(o));
};

const IndexPage = (props) => {
  async function get_ar() {
    try {
      const result = await fetch(`/api/get`, {
        method: 'GET',
      });
      const data = await result.json();
      // console.log(data); //dataの中身を見てください(ブラウザのdeveloperのconsoleに表示)
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  // const dbList = get_ar();
  // const thenPromise = get_ar().then(value => {
  //   // console.log(value);
  //   return value;
  // });
  console.log(get_ar());
  // // TODO: 実際のデータベースに置き換える
  const dbList = [
    { id: 3, category: 'text', content: 'nice to meet you', authorId: 3 },
    { id: 4, category: 'image', content: 'soccer.jpg', authorId: 3 },
  ];
  const db = get_ar();
  console.log(typeof db);
  const FriendListItem = ({ account, text }) => (
    <ListItem divider>
      <ListItemText primary={account} secondary={text} />
    </ListItem>
  );

  const FriendList = () => (
    <>
      <List component="div" sx={{ width: '100%' }}>
        {dbList.map((content) => (
          <FriendListItem account={content.category} text={content.content} />
        ))}
      </List>
    </>
  );

  return (
    <div>
      <HEAD>
        <Script type="text/javascript" src="../../public/js/three.js"></Script>
        <Script
          type="text/javascript"
          src="../../public/jsartoolkit5/artoolkit.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="jsartoolkit5/artoolkit.api.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-artoolkitsource.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-artoolkitcontext.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-arbasecontrols.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-armarkercontrols.js"
        ></Script>
      </HEAD>
      <Header>友達一覧</Header>
      <Container component="main" maxWidth="xs" css={cssContainer}>
        <FriendList />
      </Container>
    </div>
  );
};

const cssContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
`;

export default IndexPage;
/*
//登録番号3番の人のarの文字列と画像ファイルを取ってくる
//browser上でprismaはうごかないよって怒られる
async function get_ar_num() {
  const ar_num = await prisma.post.findMany({
    where: { authorId: 3 },
  });
  console.log(ar_num);
}

get_ar_num();
*/
