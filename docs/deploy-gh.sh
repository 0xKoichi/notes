#!/usr/bin/env sh

#Make sure the script throws the errors it encounters
set -e

#Generating static files
npm run build

#Enter the generated folder
cd .vuepress/dist

#If you are publishing to a custom domain name
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

#If you publish to HTTPS: // < user name >. GitHub. IO
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

#If you publish to HTTPS: // < user name >. GitHub. IO/<REPO>
git push -f git@github.com:0xKoichi/notes.git main:gh-pages

cd -