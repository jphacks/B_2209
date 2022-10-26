import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { css } from '@emotion/react';

const ARMarkerPage = () => {
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

  const MarkerButtonList = () => (
    <>
      <List component="div" sx={{ width: '100%' }}>
        {users.map((user) => (
          <MarkerButtonListItem
            id={user.id}
            account={user.account}
            text={user.text}
            icon={user.icon}
            key={user.id}
          />
        ))}
      </List>
    </>
  );

  const MarkerButtonListItem = ({ id, account, text, icon }) => {
    const image = get_ARMarker(id);
    return (
      <Paper>
        <ListItemButton
          key={id}
          alignItems="flex-start"
          target="_blank"
          rel="noopener"
          href={image}
          css={cssListItemButton}
        >
          <ListItemAvatar>
            <Avatar alt={account} src={icon} />
          </ListItemAvatar>
          <ListItemText primary={account} secondary={text} />
        </ListItemButton>
      </Paper>
    );
  };

  return (
    <>
      <Header>ARマーカーの表示</Header>
      <p css={cssP}>ユーザーを選択してください</p>
      <Container component="main" maxWidth="xs" css={cssContainer}>
        <MarkerButtonList />
      </Container>
    </>
  );
};

const get_ARMarker = (id) => {
  // public/myfile.jsと同じ配列
  // TODO:
  // idとARマーカー画像の対応をデータベースで管理
  // もしくはARマーカー画像を固定にし、ARマーカーの画像ファイル名をmarker[id].png等に変更
  const patternArray = [
    'letterA',
    'letterB',
    'letterC',
    'letterD',
    'letterF',
    'kanji',
    'hiro',
  ];

  return `ARmarker/maker${id}.png`;
};

const cssListItemButton = css`
  margin: 8px 0;
`;

const cssContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const cssP = css`
  text-align: center;
`;

export default ARMarkerPage;
