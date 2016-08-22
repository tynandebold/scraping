var Xray = require('x-ray');
var xray = new Xray();

xray('http://topics.wsj.com/person/H/daniel-huang/8088', {
  reporter: '#bioHead > h2',
  bio: '#bioHead > p',
  stories: xray('.headlineSize-allLarge > ul>li',
    [{
      title: 'h2 > a',
      link: 'h2 > a@href',
      dek: '> p:last-child',
      timestamp: '> small'
    }])
  }).write('results.json');