/**利用webpack.require.context生成路由数组
*/
let context = require.context("@/docs/", true, /\.md$/);
let files = context.keys();

export const componentRouters = files.map(file => {
  let path = file.split(".")[1];
  let firstWord = path.replace("-", "");
  let name = firstWord.split("/")[1][0].toUpperCase() + firstWord.split("/")[1].slice(1);
  let component = file.split("./")[1];
  return {
    name,
    path,
    //Babel@6 导出的是一个{default:componentName},所以要加default处理
    component: require(`@/docs/${component}`).default
  };
});
