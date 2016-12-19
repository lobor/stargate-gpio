import { Plugin } from './../../core/';



class Gpio extends Plugin {
  get props() {
    return {
      dependencies: [],
      conf: require('./config/config')
    };
  }

  onLoad(){

  }

  install(){

  }
}


export default Gpio;
