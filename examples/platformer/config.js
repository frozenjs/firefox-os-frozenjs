var dojoConfig = {
  baseUrl: './',
  packages: [
    { name: 'dojo', location: 'deps/dojo' },
    { name: 'dcl', location: 'deps/dcl', main: 'dcl' },
    { name: 'lodash', location: 'deps/lodash/dist', main: 'lodash' },
    { name: 'hammer', location: 'deps/hammer/dist', main: 'hammer' },
    { name: 'frozen', location: 'deps/frozen/src', main: 'GameCore' },
    { name: 'firefox-install', location: 'deps/firefox-install' },
    { name: 'firefox-landscape', location: 'deps/firefox-landscape' },
    { name: 'game', location: 'src', main: 'game' }
  ],
  deps: ['firefox-install', 'firefox-landscape', 'game'],
  async: true
};