import * as React from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { teal } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
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
        {markerList.map((content) => (
          <LinkButton
            user={content.user}
            image={content.image}
            key={content.key}
          />
        ))}
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

  return `ARmarker/${patternArray[id - 1]}.png`;
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

const LinkButton = ({ user, image }) => (
  <ColorButton
    variant="contained"
    target="_blank"
    rel="noopener"
    href={image} // TODO: 実際のARマーカー読み取り画面のURLに変更
    css={cssButton}
  >
    {user}
  </ColorButton>
);

const markerList = [
  {
    key: 1,
    user: 'ユーザー1',
    image: '/ARmarker/letterA.png',
  },
  {
    key: 2,
    user: 'ユーザー2',
    image: '/ARmarker/letterB.png',
  },
  {
    key: 3,
    user: 'ユーザー3',
    image: '/ARmarker/letterC.png',
  },
  {
    key: 4,
    user: 'ユーザー4',
    image: '/ARmarker/letterD.png',
  },
  {
    key: 5,
    user: 'ユーザー5',
    image: '/ARmarker/letterF.png',
  },
  {
    key: 6,
    user: 'ユーザー6',
    image: '/ARmarker/kanji.png',
  },
  {
    key: 7,
    user: 'ユーザー7',
    image: '/ARmarker/hiro.png',
  },
];

const cssListItemButton = css`
  margin: 8px 0;
`;

const cssButton = css`
  margin: 16px;
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
