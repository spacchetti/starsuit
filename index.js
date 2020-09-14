/* global process require */
const https = require('https');
const fs = require('fs');

const tag = process.argv[2];

if (typeof tag == 'undefined') {
    throw "No tag specified as argument!";
}

console.log('TAG: ', tag);

const file = fs.createWriteStream("packages.json");

const packagesURL = 'https://raw.githubusercontent.com/purescript/package-sets/' + tag + '/packages.json';

const request = https.get(packagesURL, function(response) {
  response.pipe(file);

  file.on('finish', () => {
    const allPackages = require('./packages.json');

    const spagoDhall = (
      '{ sources = [ "src/**/*.purs", "test/**/*.purs" ], \
      name = "install-everything", \
      dependencies = ' + JSON.stringify(Object.keys(allPackages)) +
        ', packages = ./packages.dhall }'
    );

    fs.writeFileSync('spago.dhall', spagoDhall);
    fs.writeFileSync('packages.dhall', 'https://github.com/purescript/package-sets/releases/download/' + tag + '/packages.dhall');
  });
});
