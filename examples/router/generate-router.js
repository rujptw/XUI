//FIXME:自动生成routes,有问题啊
const buttonPath = '../docs/button.md';
const slicePath = '../docs/slice.md';
let path = [buttonPath, slicePath]
let routesArr = []

function capitalize(name) {
  let firstWord = name[0].toUpperCase();
  let otherWord = name.slice(1);
  console.log(firstWord + otherWord)
  return firstWord + otherWord
}

function gennerateRouter(path) {
  path.forEach(item => {
    let aim = item.split('/')[2].split('.')[0]
    let obj = {
      path: `/${aim}`,
      name: capitalize(aim),
      component: resolve => require([item], resolve)
    }
    console.log(obj.path)
    console.log(obj.name)
    console.log(obj.component)
    routesArr.push(obj)
  })
  console.log(routesArr)
  return routesArr
}
export const routes = gennerateRouter(path)
