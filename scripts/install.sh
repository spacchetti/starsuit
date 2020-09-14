#!/usr/bin/env bash
set -e

export PURS_VERSION="$(curl -H "Authorization: token $GITHUB_API_TOKEN" --silent "https://api.github.com/repos/purescript/purescript/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')"
echo "PureScript version: $PURS_VERSION"
wget -O $HOME/purescript.tar.gz https://github.com/purescript/purescript/releases/download/$PURS_VERSION/linux64.tar.gz
tar -xvf $HOME/purescript.tar.gz -C $HOME/
chmod a+x $HOME/purescript
npm install -g spago
npm install -g purescript
npm install -g purescript-docs-search
