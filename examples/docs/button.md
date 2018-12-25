# Button 按钮

## 基础用法

:::demo 默认为朴素的按钮


```html

<x-button>普通按钮</x-button>

<x-button type="primary" >激活按钮</x-button>

<x-button  type="primary" size="small">小型按钮</x-button>

<x-button size="big" >大型按钮</x-button>

<x-button disabled >禁用按钮</x-button>

<x-button icon="icon-loading">图标按钮</x-button>

<x-button icon="icon-sousuo">图标按钮</x-button>


```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   small,big,normal            |    normal     |
| type     | 类型   | string    |   primary,plain| plain |
| disabled  | 是否禁用状态    | boolean   |  true,false  | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
