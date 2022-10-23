# 自己紹介 de AR（じこしょうかい で あーる）

<img width="800" alt="サムネイル" src="https://user-images.githubusercontent.com/72190893/197318598-5fd3f9b5-3f76-420e-a8e7-1ba9a0e9abe8.png">

## デモ動画
https://user-images.githubusercontent.com/72332745/197328320-20f7a33c-40cc-40ae-85ac-26a33357dce4.MOV

[デモ動画 (Google Drive) ](https://drive.google.com/file/d/1TyIxKmXAFAUnPMtGVx_SGGMyNe3xS7Ea/view?usp=sharing) 

## 製品概要
### 背景（製品開発のきっかけ、課題等）

自己紹介で**顔と名前が覚えられない！**   

- 言葉だけで印象に残らない…
- 家に帰ってから誰と話したか思い出せない  

初対面で**緊張する…**

- コロナ禍でオンラインで人と接する機会が増えて対面での自己紹介が苦手に
- 会話がいまいち盛り上がらない  

<br>
そこで、人物に合わせて名前や趣味の写真をARで重畳表示して初対面での会話を盛り上げるアプリを開発しました！

自己紹介を受けた相手を後で一覧形式で見返せるようにして、誰といつ話したかを忘れないようにします。
<br>
<br>

### 製品説明（具体的な製品の説明）
事前に登録した内容をARで重畳表示し、インパクトの強い自己紹介を実現し、自己紹介を受けた相手を管理するWebアプリです。ARマーカーを読み取り画面で映すことで、マーカーに対応した画像とテキストをAR表示します。編集画面で入力した画像とテキストをデータベースに登録し、登録者一覧で表示します。今後はログイン機能を実装し、ユーザーとマーカーに応じて表示される内容を連携する予定です。

### 特長
#### 1. 好きな文字、画像をARで表示できる  
- 初対面の人との会話の種になります
- 自分の趣味をわかりやすく伝えられます
#### 2. 今日会った人を見返せる
- 読み込んだARの履歴が残ります

### 解決出来ること
- 今日出会った人を記録しておくことができ、「う〜ん、何の人だっけ」をなくします
- 初対面で緊張していても、ARで表示した画像や文字によって、会話が弾みます
- ARによる豊かな印象的表現により、人と話題が強固に結びつきやすくなります
### 今後の展望 
- ログイン機能の実装
  - 自己紹介を受けた相手リストの実装
- ユーザ数が増えた時の対応
- 人物の位置に合わせたARの表示
- 一つのARマーカーに対して複数の画像を表示する実装

### 注力したこと（こだわり等）
* 安定性及び視覚的楽しさを優先し、QRマーカーではなくARマーカーを採用
* 個人のidのARマーカーへの埋め込み
* 読み取ったidからそのidの人が登録した画像を表示できる
* 好きな画像と文字をARで表示できる
* ARならではの立体感を意識したARデザイン
* 読み取ったARのidをデータベースで管理
* 編集画面で入力したデータをデータベースに登録し、一覧で表示できる
* 実際に別デバイス (FastMile)にサーバーを立てて検証
  * ARマーカーを読み取ることで予め登録した画像とテキストをAR表示する機能を検証しました。この場合、スマホやPCなどのデバイスはFastMileにWiFi接続すると、URLへのアクセスのみでアプリを利用できます。
  * FastMileを使うことで閉じたコミュニティでの通信に制限されるので、個人情報の漏洩を防ぐ
  * **社内の懇親会**に使える

## 開発技術
### 活用した技術

#### デバイス
* 5G超高速無線ブロードバンドFastMile  (NOKIA様提供)

#### フレームワーク・ライブラリ・モジュール
フレームワーク
* Next.js

ライブラリ
* Three.js artoolkit
* jsartoolkit
* threex.artoolkit
* Prisma
* Emotion
* MUI
* Axios
  
ミドルウェア
* Multer

### 独自技術
#### ハッカソンで開発した独自機能・技術
* スマホから画像・文章をアップロードし、idと結びつけてAR表示
* ARマーカーからユーザIDを取り出す [myfile.html](https://github.com/jphacks/B_2209/blob/develop/public/myfile.html)

## 実行方法
事前にNode.js (npm) をインストールしてください。

```
# clone する
$ git clone https://github.com/jphacks/B_2209
# ディレクトリ移動
$ cd B_2209
# next のinstall
$ npm upgrade
# ライブラリinstall
$ npm ci
# db作成
$ npx prisma migrate dev --name init
# サーバー立ち上げ
$ npm run dev
```
http://localhost:3000 にアクセスするとアプリが表示されます。

### データベースのリフレッシュ
以下を実行してください。
```
$ rm -R prisma/migrations/ prisma/dev.db
$ npx prisma migrate dev --name init
$ npm run dev
```
