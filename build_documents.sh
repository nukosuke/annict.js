#!/bin/sh

npm install && npm run docs && \
git checkout gh-pages
ls | grep -v '^docs$' | xargs rm -rf
rm -f .gitignore .npmignore .travis.yml
mv ./docs/* . && rmdir docs
git add . && \
git commit -m "build $(git describe --abbrev=0 master) document : $(date)" && \
git push origin gh-pages
