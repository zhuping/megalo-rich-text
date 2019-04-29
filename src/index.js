import octoparse from '../node_modules/octoparse2/src/index';

export default {
  install(Vue) {
    Vue.prototype.$htmlParse = function(str) {
      let nodes = octoparse.parse(str);
      return nodes;
    }
  }
};