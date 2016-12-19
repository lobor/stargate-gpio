var fs = require('fs');
var rootPath = './../..';

try {
  fs.accessSync(rootPath + '/db/Gpio', fs.F_OK);
} catch (e) {
  fs.mkdirSync(rootPath + '/db/Gpio', '0777');
}
