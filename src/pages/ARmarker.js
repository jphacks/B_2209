import { Header } from '../components/Header';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { teal } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

const ARMarkerPage = () => {
  return (
    <>
      <Header>ARマーカーの表示</Header>
      <p css={cssP}>ユーザーを選んでください</p>
      <Container component="main" maxWidth="xs" css={cssContainer}>
        {markerList.map((content) => (
          <LinkButton user={content.user} image={content.image} />
        ))}
      </Container>
    </>
  );
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
    image: '/ARMarker/letterA.png',
  },
  {
    key: 2,
    user: 'ユーザー2',
    image: '/ARMarker/letterB.png',
  },
  {
    key: 3,
    user: 'ユーザー3',
    image: '/ARMarker/letterC.png',
  },
  {
    key: 4,
    user: 'ユーザー4',
    image: '/ARMarker/letterD.png',
  },
  {
    key: 5,
    user: 'ユーザー5',
    image: '/ARMarker/letterF.png',
  },
  {
    key: 6,
    user: 'ユーザー6',
    image: '/ARMarker/kanji.png',
  },
  {
    key: 7,
    user: 'ユーザー7',
    image: '/ARMarker/hiro.png',
  },
];

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
