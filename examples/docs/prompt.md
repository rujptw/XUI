# 信息提示

## 基础用法

:::demo 代码示例

```html
<x-button @click="showPrompt">按钮</x-button>

<script>
	export default {
		data() {
			return {
				isShow: false
			};
		},
		methods: {
			showPrompt() {
				this.$xprompt({ title: "请求", desc: "请求出战，斩颜良" });
			}
		}
	};
</script>
```

:::

### Attributes

| 属性     | 说明     | 类型   | 可选值 | 描述          |
| -------- | -------- | ------ | ------ | ------------- |
| title    | 标题     | String | /      | /             |
| desc     | 描述     | String | /      | /             |
| duration | 持续时间 | Number | /      | 默认为 3000ms |

### 方法
| 方法 | 说明 | 类型 | 可选值 | 描述 |
| -------- | -------- | ------ | ------ | ------------- |
| closePrompt | 关闭弹窗 | Function | / | / |
