# 展示面板

## 基础用法

:::demo 代码示例

```html
<x-show-panel :listData="slotData">
	<span slot="title">产品展示</span>
</x-show-panel>

<script>
	export default {
		data() {
			return {
				slotData: [
					{
						imgUrl:
							"http://iph.href.lu/120x120?text=%E4%BA%A7%E5%93%81%E7%89%B9%E7%82%B9",
						title: "灵活",
						desc: "啊神色似的"
					},
					{
						imgUrl:
							"http://iph.href.lu/120x120?text=%E4%BA%A7%E5%93%81%E7%89%B9%E7%82%B9",
						title: "灵感",
						desc: "啊神色似的是"
					},
					{
						imgUrl:
							"http://iph.href.lu/120x120?text=%E4%BA%A7%E5%93%81%E7%89%B9%E7%82%B9",
						title: "零四",
						desc: "啊神色似的是的"
					},
					{
						imgUrl:
							"http://iph.href.lu/120x120?text=%E4%BA%A7%E5%93%81%E7%89%B9%E7%82%B9",
						title: "零五",
						desc: "啊神色似的是的"
					}
				]
			};
		}
	};
</script>
```

:::

### Attributes

| 属性         | 说明                   | 类型  | 可选值 | 描述 |
| ------------ | ---------------------- | ----- | ------ | ---- |
| listData     | 传入数组即可渲染列表   | Array | /      | /    |
| slot="title" | 必填，用于渲染列表标题 | /     | /      | /    |
