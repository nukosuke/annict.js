[![npm version](https://badge.fury.io/js/annict.svg)](https://badge.fury.io/js/annict)
[![Build Status](https://travis-ci.org/nukosuke/annict.js.svg?branch=develop)](https://travis-ci.org/nukosuke/annict.js)
[![Dependency Status](https://david-dm.org/nukosuke/annict.js.svg)](https://david-dm.org/nukosuke/annict.js)
[![devDependency Status](https://david-dm.org/nukosuke/annict.js/dev-status.svg)](https://david-dm.org/nukosuke/annict.js#info=devDependencies)

# annict.js
アニメ視聴記録サービス[Annict](https://annict.com/)のAPIクライアントライブラリです。

- [Annict APIドキュメント](https://annict.wikihub.io/)
- [annict.jsドキュメント](http://qiita.com/nukosuke/items/eb4829de5a0497bd43c2)


## インストール
```
npm install annict --save
```

ブラウザの場合
```
bower install annict --save
```

## 使い方
詳しくは[ドキュメント](http://qiita.com/nukosuke/items/eb4829de5a0497bd43c2)を参照してください。

### Node.js

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

### ブラウザ

```html
<body>
    ...
    <script src='/js/annict.min.js'></script>
    <script>
        var annict = new Annict();
    </script>
</body>
```

## LICENSE
Copyright (c) 2016 ぬこすけ  
Released under the MIT license  
http://opensource.org/licenses/mit-license.php
