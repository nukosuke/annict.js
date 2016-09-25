#!/bin/sh

npm install && npm run docs && \
git checkout --orphan gh-pages
ls | grep -v '^docs$' | xargs rm -rf
mv ./docs/* . && rmdir docs
git add . && \
git commit -m "build $(git describe --abbrev=0 master) document\n$(date)" && \
git push origin gh-pages
