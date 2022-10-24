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
    let url = window.location.href;
    let index = url.length - 1;
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      if ('1' <= url[index] && url[index] <= '7') {
        alert('登録済みです');
        location.href = url;
        return;
      }
      const account = data.get('user_name');
      const text = data.get('text');
      const icon = `/uploads/${fileName}`;
      const body = { account, text, icon };
      //現在は、友達リストのアイコン、テキストとARマーカーのアイコン、テキストが/api/user/postに行くと同時更新されます
      await fetch(`/api/user/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
    try {
      const file = data.get('file');
      const formData = new FormData();
      formData.append('file', file);
      // console.log(...formData.entries());
      await axios.post('http://localhost:3000/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await fetch(`/api/user/count`);
      alert('保存しました');
      const userId = await response.json();
      console.log(data);
      if (userId >= 8) {
        alert(
          'Error!\n登録者数が上限です!\nデータベースをリフレッシュしてください'
        );
        alert(
          'Error!\n登録者数が上限です!\nデータベースをリフレッシュしてください'
        );
        alert(
          'Error!\n登録者数が上限です!\nデータベースをリフレッシュしてください'
        );
      }
      location.href = url + '?' + String(userId);
    } catch (error) {
      console.error(error);
    }
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
              <input
                type="file"
                name="file"
                accept="image/jpeg image/png"
                onChange={handleChangeFile}
                required
                css={cssUploadButton}
              />
              画像をアップロード
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

const cssUploadButton = css`
  width: 1px;
  height: 1px;
  opacity: 0;
`;

const cssImage = css`
  max-width: 100%;
`;

export default EditPage;
