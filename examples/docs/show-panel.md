# 展示面板

## 基础用法

:::demo 代码示例


```html
//直接用props传递数据然后展示
<x-show-panel>
    <span slot="title">产品展示</span>
</x-show-panel>

<script>
export default{
    data(){
        return {
             slotData:[
                {
                    imgUrl:'',
                    title:'灵活',
                    desc:'啊神色似的是的得瑟得瑟得瑟得瑟的',
                },
                {
                    imgUrl:'',
                    title:'灵感',
                    desc:'啊神色似的是的得瑟得瑟得瑟得瑟的',
                },
                {
                    imgUrl:'',
                    title:'零四',
                    desc:'啊神色似的是的得瑟得瑟得瑟得瑟的',
                }
            ]
        }
    }
}
</script>
```
:::

### Attributes

| 事件     | 说明    | 类型      | 可选值       | 描述  |
|---------- |-------- |---------- |-------------  |-------- |
| switchTime     |  监听此事件可获取切换的时间,时间为string类型   | / |   /| /|
