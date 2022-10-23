import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import HEAD from 'next/head';
import Script from 'next/script';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { css } from '@emotion/react';

const IndexPage = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/user/get', {
        method: 'GET',
      });
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // // 使っていないダミー
  // const dbList = [
  //   {
  //     id: 1,
  //     key: 1,
  //     account: 'あいうえお',
  //     icon: 'hoge',
  //     text: 'よろしくお願いします！',
  //   },
  //   {
  //     id: 2,
  //     key: 2,
  //     account: 'かきくけこ',
  //     icon: 'hoge',
  //     text: 'やっほー！趣味は読書だよ',
  //   },
  // ];

  const FriendListItem = ({ account, text, icon }) => (
    <ListItem divider alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={account} src={icon} />
      </ListItemAvatar>
      <ListItemText primary={account} secondary={text} />
    </ListItem>
  );

  const FriendList = () => (
    <>
      <List component="div" sx={{ width: '100%' }}>
        {users.map((user) => (
          <FriendListItem
            account={user.account}
            text={user.text}
            icon={user.icon}
          />
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
      <Header>登録者一覧</Header>
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
