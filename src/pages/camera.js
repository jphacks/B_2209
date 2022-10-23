// 今は使ってなくてmyfile.htmlに移動
export default function Home() {
  async function get_ar() {
    try {
      const id = 1; //今はidが1の人のデータを取得するようにコードを書いています。ここの数字を変えてください。
      const result = await fetch(`/api/ar/image/get/${id}`, {
        method: 'GET',
      });
      const data = await result.json();
      console.log(data); //dataの中身を見てください(ブラウザのdeveloperのconsoleに表示)
    } catch (error) {
      console.error(error);
    }
  }
  get_ar();
  return <h1>Hello Next.js</h1>;
}
