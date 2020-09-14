#!/usr/bin/env bash
set -e

TAG="$(curl -H "Authorization: token $GITHUB_API_TOKEN" --silent "https://api.github.com/repos/purescript/package-sets/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')"
echo "package-sets release: $TAG"
node index.js $TAG
spago install
set -f
purs docs $(spago sources)
purescript-docs-search build-index
