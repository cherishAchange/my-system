const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
  constructor(params){
    console.log(`console-log-on-build-webpack-plugin：我接受的参数${JSON.stringify(params)}`);
  }
  apply(compiler) {
    console.log('========compiler.hooks.run无tab方法，官网描述与实际不符=========');
    // compiler.hooks.run.tab(pluginName, compilation => {
    //   console.log('webpack 构建过程开始了！');
    // });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;