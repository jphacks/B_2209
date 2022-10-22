import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header } from '../components/Header';
import { useState } from 'react';
import { css } from '@emotion/react';
import axios from 'axios';
// import buffer from '../../public/buffer.js';
// import { readId } from './../../public/myfile.js';
// ここを読み込もうとするとエラーが出る
// console.log('readId=' + readId);

const EditPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const account = data.get('user_name');
      const icon = data.get('text');
      const name = `/uploads/${fileName}`;
      const body = { account, icon, name };
      await fetch(`/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
    try {
      // console.log(data.get('file'));
      const file = data.get('file');
      const formData = new FormData();
      formData.append('file', file);
      console.log(...formData.entries());
      console.log(fileName);
      await axios.post('http://localhost:3000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.error(error);
    }
    alert('保存しました');
  };

  const [preview, setPreview] = useState('');
  const [fileName, setFileName] = useState('');

  const handleChangeFile = (event) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return;
    }
    const { files } = event.target;
    const createObjectURL =
      (window.URL || window.webkitURL).createObjectURL ||
      window.createObjectURL;
    setPreview(createObjectURL(files[0]));
    setFileName(files[0].name);
  };

  return (
    <div>
      <Header>表示内容の編集</Header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{ mt: 1 }}
            encType="multipart/form-data"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="氏名"
              name="user_name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="text"
              label="一言"
              id="text"
              helperText="表示したいメッセージを入力してください"
              multiline
            />
            <Button variant="outlined" component="label">
              画像をアップロード
              <input
                type="file"
                name="file"
                accept="image/jpeg image/png"
                onChange={handleChangeFile}
                required
                hidden
              />
            </Button>
            <p>{fileName}</p>
            <img src={preview} css={cssImage} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              保存
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

const cssImage = css`
  max-width: 100%;
`;

export default EditPage;
