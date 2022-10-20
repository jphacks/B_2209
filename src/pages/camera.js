import { Header } from '../components/Header';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { teal } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

const CameraPage = () => {
  return (
    <>
      <Header>ARマーカーの読み取り</Header>
      <Container component="main" maxWidth="xs" css={cssContainer}>
        <ColorButton
          variant="contained"
          target="_blank"
          rel="noopener"
          href="https://google.com" // TODO: 実際のARマーカー読み取り画面のURLに変更
          size="large"
          css={cssButton}
          color="secondary"
        >
          読み取り画面を開く
        </ColorButton>
      </Container>
    </>
  );
};

const cssButton = css`
  margin-top: 64px;
`;

const cssContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CameraPage;
