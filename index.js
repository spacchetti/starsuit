/* global require */
const https = require('https');
const fs = require('fs');

const excluded = new Set(['metadata', 'halogen-formless', 'text-encoding']);

const file = fs.createWriteStream("packages.json");

const request = https.get('https://raw.githubusercontent.com/purescript/package-sets/master/packages.json', function(response) {
  response.pipe(file);

  file.on('finish', () => {

    const allPackages = require('./packages.json');

    const spagoDhall = (
      '{ sources = [ "src/**/*.purs", "test/**/*.purs" ], \
      name = "install-everything", \
      dependencies = ' + JSON.stringify(Object.keys(allPackages).filter(package => !excluded.has(package))) +
        ', packages = ./packages.dhall }'
    );

    fs.writeFileSync('spago.dhall', spagoDhall);
  });
});
