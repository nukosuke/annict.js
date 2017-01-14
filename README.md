[![npm version](https://badge.fury.io/js/annict.svg)](https://badge.fury.io/js/annict)
[![Bower version](https://badge.fury.io/bo/annict.svg)](https://badge.fury.io/bo/annict)
[![Build Status](https://travis-ci.org/nukosuke/annict.js.svg?branch=develop)](https://travis-ci.org/nukosuke/annict.js)
[![Dependency Status](https://david-dm.org/nukosuke/annict.js.svg)](https://david-dm.org/nukosuke/annict.js)
[![devDependency Status](https://david-dm.org/nukosuke/annict.js/dev-status.svg)](https://david-dm.org/nukosuke/annict.js#info=devDependencies)

# annict.js
annict.js is client library for anime tracking service, [Annict](https://annict.com/). This library supports Node.js and browser.

- [annict.js Tutorial (Japanese Only)](http://qiita.com/nukosuke/items/eb4829de5a0497bd43c2)
- [annict.js Reference](https://nukosuke.github.io/annict.js/)
- [Annict API Official Document (Japanese Only)](https://annict.wikihub.io/)

## Install

NPM
```
npm install annict --save
# or if you use Yarn for package managing
yarn add annict
```

Bower
```
bower install annict --save
```

## Usage
See also [Document](http://qiita.com/nukosuke/items/eb4829de5a0497bd43c2) for more details.

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
.then(response => response.json())
.then(token => {

  annict.client.setHeader('Authorization', `Bearer ${token.access_token}`);

  annict.Work.get({ filter_title: 'shirobako' })
  .then(response => response.json())
  .then(works    => console.log(works));

  annict.Me.Record.create({
    episode_id: 5013,
    comment: 'あぁ^～心がぴょんぴょんするんじゃぁ^～',
    rating: 5.0,
    share_twitter: 'true',
    share_facebook: 'false'
  })
  .then(response => response.json())
  .then(record   => console.log(record));

});
```

### Browser

```html
<body>
    ...
    <script src='/js/annict.min.js'></script>
    <script>
        var annict = new Annict();
    </script>
</body>
```

Available methods are partly differ between Node.js and browser.
- https://github.com/nukosuke/annict.js/pull/25#issue-160690355

## License
Copyright (c) 2017 nukosuke  
This software is licensed under MIT license.
http://opensource.org/licenses/mit-license.php
