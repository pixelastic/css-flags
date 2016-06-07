import algoliasearch from 'algoliasearch';
import fs from 'fs';
import xray from 'x-ray';
import _ from 'lodash';

let x = xray();

let html = 'http://localhost:4001/';
let context = '.c-flaglist--item:not(.c-flaglist--item__hard)';
let selectors = [{
  name: '.c-flaglist--name',
  code: '.c-flag@class'
}];
let appId = 'O3F8QXYK6R';

// Checks the apiKey in ENV and local file
let apiKey = process.env.ALGOLIA_API_KEY;
if (fs.existsSync('./_algolia_api_key')) {
  apiKey = fs.readFileSync('./_algolia_api_key', 'utf8').trim();
}
if (!apiKey) {
  console.info('Usage:');
  console.info('$ ALGOLIA_API_KEY=XXXXX npm run algolia');
  process.exit();
}

// Grab all flags from the page
x(html, context, selectors)((err, flags) => {
  if (err) {
    console.info('Error when grabbing flags from the page', err);
    return;
  }

  flags = _.map(flags, (flag) => {
    flag.code = flag.code.split(' ')[1].replace('c-flag__', '');
    return flag;
  });

  pushRecords(flags);
});

const pushRecords = (records) => {
  let client = algoliasearch(appId, apiKey);
  let index = client.initIndex('cssflags_tmp');
  let indexSettings = {
    attributesToIndex: [
      'code',
      'name'
    ],
    hitsPerPage: 300,
    removeWordsIfNoResults: 'allOptional'
  };

  // Push data
  index.addObjects(records)
    .then(() => {
      console.info('Records pushed');
      return index.setSettings(indexSettings);
    })
    .then(() => {
      console.info('Settings updated');
      return client.moveIndex('cssflags_tmp', 'cssflags');
    })
    .then(() => {
      console.info('Atomic replace done');
    });
};
