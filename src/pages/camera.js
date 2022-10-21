import { Header } from '../components/Header';

const CameraPage = () => {
  async function get_ar() {
    try {
      const id = 1; //今はidが1の人のデータを取得するようにコードを書いています。ここの数字を変えてください。
      const result = await fetch(`/api/get/${id}`, {
        method: 'GET',
      });
      const data = await result.json();
      console.log(data); //dataの中身を見てください(ブラウザのdeveloperのconsoleに表示)
    } catch (error) {
      console.error(error);
    }
  }
  get_ar();
  return (
    <>
      <Header>ARマーカーの読み取り</Header>
      <h1>This is camera page!</h1>
    </>
  );
};

export default CameraPage;
