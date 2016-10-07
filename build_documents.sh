#!/bin/sh

npm install && npm run docs && \
git checkout gh-pages
rm -rf classes interfaces assets index.html
mv ./docs/* . && rmdir docs
git add . && \
git commit -m "build $(git describe --abbrev=0 master) document : $(date)" && \
git push origin gh-pages
