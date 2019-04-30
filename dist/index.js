import octoparse from 'octoparse2';

var index = {
  install(Vue) {
    Vue.prototype.$htmlParse = function(str) {
      let nodes = octoparse.parse(str);
      return nodes;
    };
  }
};

export default index;
