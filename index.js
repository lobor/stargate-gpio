var basePath = process.cwd();
import { Plugin } from './../../core/';
let db = require(basePath + '/core/db')(basePath + '/db/Gpio');


class Gpio extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  constructor () {
    super();

    this.tableLogic = db.use('Logics');
  };

  onLoad(){

  }

  install(){

  }
}


export default Gpio;
