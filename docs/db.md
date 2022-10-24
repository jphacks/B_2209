# データベースの仕様書
## 存在するテーブル
### User テーブル
会員登録の時に登録される情報
友達リストのiconとcommentも同時に登録してもらう

|  id  |  account  | text | icon | friend | ar|
| ---- | ---- | ---- | ---- | ---- | ---- |
|  1  |  たろう  | よろしく | icon1.jpg | friend | ar |
|  2  |  はなこ  | わーい | icon2.jpg | friend | ar |
### friendテーブル
- 1番の人は、2、12番の人と友達
- 2番の人は、1番の人と友達

|  id  |  myId | friendId |
| ---- | ---- | ---- |
|  1  |  1  |  2  |
|  2 |  1  |  12  |
|  3 |  2  |  1  |
### arテーブル
- 1番の人はtextとimage
- 2番の人はimageだけ

|  id  |  ownerId | category | content |
| ---- | ---- | ---- | ---- |
|  1  |  1 | text | 読書が好きです  |
|  2 |  1 | image  |  bear.jpg  |
|  3 |  2 | image | atcoder.jpg  |
## 想定される仕様
### 会員登録画面
before  
userテーブル

|  id  |  account  | text | icon | friend | ar|
| ---- | ---- | ---- | ---- | ---- | ---- |
|  1  |  たろう  | よろしく | icon1.jpg | friend | ar |
|  2  |  はなこ  | わーい | icon2.jpg | friend | ar |
- 氏名:じろう 
- 一言:こんにちは
- 画像をアップロード:myImage.jpg  
が入力されると  
after

|  id  |  account  | text | icon | friend | ar|
| ---- | ---- | ---- | ---- | ---- | ---- |
|  1  |  たろう  | よろしく | icon1.jpg | friend | ar |
|  2  |  はなこ  | わーい | icon2.jpg | friend | ar |
|  3  |  じろう  | こんにちは | myImage.jpg | friend | ar |

### 編集画面(表示するARの追加)  
before  
arテーブル  

|  id  |  ownerId | category | content |
| ---- | ---- | ---- | ---- |
|  1  |  1 | text | 読書が好きです  |
|  2 |  1 | image  |  bear.jpg  |
|  3 |  2 | image | atcoder.jpg  |

id:1の人が  
- soccer.jpgを追加で登録
すると  
after  

|  id  |  ownerId | category | content |
| ---- | ---- | ---- | ---- |
|  1  |  1 | text | 読書が好きです  |
|  2 |  1 | image  |  bear.jpg  |
|  3 |  2 | image | atcoder.jpg  |
|  4 |  1 | image | soccer.jpg  |

id:2の人が
- 「atcoderがいきがい」を追加で登録  
すると  
after

|  id  |  ownerId | category | content |
| ---- | ---- | ---- | ---- |
|  1  |  1 | text | 読書が好きです  |
|  2 |  1 | image  |  bear.jpg  |
|  3 |  2 | image | atcoder.jpg  |
|  4 |  1 | image | soccer.jpg  |
|  5 |  2 | text | atcoderがいきがい  |

### 読み取り
#### ARの表示
arテーブル参照

|  id  |  ownerId | category | content |
| ---- | ---- | ---- | ---- |
|  1  |  1 | text | 読書が好きです  |
|  2 |  1 | image  |  bear.jpg  |
|  3 |  2 | image | atcoder.jpg  |
|  4 |  1 | image | soccer.jpg  |
|  5 |  2 | text | atcoderがいきがい  |
  
  
id=1の人のときwhere=1&category=textで{"読書が好きです"}が返ってくる  
id=1の人のときwhere=1&category=imageで{"bear.jpg","soccer.jpg"}が返ってくる  

### 友達追加
friendテーブル  
before  

|  id  |  myId | friendId |
| ---- | ---- | ---- |
|  1  |  1  |  2  |
|  2 |  1  |  12  |
|  3 |  2  |  1  |

id=1の人がid=4のARマーカーを読み取ってfriendになったとき    
after  

|  id  |  myId | friendId |
| ---- | ---- | ---- |
|  1  |  1  |  2  |
|  2 |  1  |  12  |
|  3 |  2  |  1  |
|  4 |  1  |  4  |

### フレンド表示
friendテーブルとuserテーブルを仮想的にくっつける(inner join句で)  
できなかったらwhereで一回一回呼び出せばなんとかなる)  
friendテーブルのfriendIdとuserテーブルのidを合体

|  friend.id  | friend.myId | friend.friendId | user.id | user.account | user.icon | user.text |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|  1  |  1  |  2  |   2  |  はなこ | icon2.jpg  |  わーい  | 
|  2 |  1  |  12  |  12  |  ジョーンズ | face.jpg  |  hello world  | 
|  3 |  2  |  1  |  1  |  たろう | icon1.jpg  |  よろしく  | 
|  4 |  1  |  4  |  4  |  さぶろう | icon4.jpg  |  いえーい  | 

id = 1の人だったら
friend.myId = 1の行を全部返す
- はなこ、icon2.jpg、わーい  
- ジョーンズ、face.jpg、hello world
- さぶろう、icon4.jpg、いえーい
が返される  
