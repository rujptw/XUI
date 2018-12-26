# 数据展示面板

## 基础用法

:::demo slot所在标签可用任意双标签


```html

<x-data-panel v-for="item in info" :key="item.num">
    <span slot="num">{{item.number}}</span>
    <span slot="desc">{{item.name}}</span>
</x-data-panel>

<script>
export default{
    data(){
        return {
        info:[
            {name:"承保单量",number:2222,},
            {name:"保险单量",number:2222,}
            ]
        }
    }
}
</script>

```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 描述  |
|---------- |-------- |---------- |-------------  |-------- |
| slot     |  插槽   | string  |   num,desc|  num插槽用于数字,desc用于文字|
