# annict.js
アニメ視聴記録サービスAnnictのAPIクライアントライブラリです。

- [Annict](https://annict.com/)
- [Annict API](https://annict.wikihub.io/)

## インストール
```
npm install annict --save
```

## 使い方
```js
var Annict = require('annict').default;

var annict = new Annict();

annict.OAuth.token(
  CLIENT_ID,
  CLIENT_SECRET,
  GRANT_TYPE,
  REDIRECT_URI,
  CODE
)
.then(token => {

  annict.client.setHeader('Authorization', `Bearer ${token.access_token}`);

  annict.Work.get({ filter_title: 'shirobako' })
  .then(res => {
    console.log(res.works);
  });

  annict.Me.Record.create({
    episode_id: 5013,
    comment: 'あぁ^～心がぴょんぴょんするんじゃぁ^～',
    rating: 5.0,
    share_twitter: 'true',
    share_facebook: 'false'
  })
  .then(res => console.log);

});
```

## LICENSE
Copyright (c) 2016 ぬこすけ  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php
