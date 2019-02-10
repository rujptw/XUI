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
				this.$xcprompt({ title: "确认要删除这条消息吗", desc: "删除后无法恢复偶" });
			}
		}
	};
</script>
```

:::
