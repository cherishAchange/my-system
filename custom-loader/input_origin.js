const dependent = require('./dependent_module');
const loaderUtils = require('loader-utils');
/**
 * @params params = 包含源文件内容的字符串
*/
const consoleLogSource = function(params){
  // const callback = this.async();
  // if(this.cacheable){
  //   this.cacheable();
  // }
  const options = loaderUtils.getOptions(this) || {}; //这里拿到 webpack.config.js 的 loader 配置
  dependent(222);
  // console.log(`打印一下从webpack配置文件拿到的配置项：${JSON.stringify(options)}`);
  console.log(`==========我是自定义loader，我被执行了，打印一下this：${this}==========`);
  console.log(String(params))
  //callback(String(params));
  //需要返回多个值时调用this.callback(err, values...)
  return String(params);
};

module.exports = consoleLogSource;