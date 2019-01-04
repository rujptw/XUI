/** 数据展示组件 */
<template>
	<div class="xui__data-panel">
		<div class="xui__data-detail"><slot name="num"></slot></div>
		<div class="xui__data-desc"><slot name="desc"></slot></div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: "XDataPanel",
		props: {},
		data() {
			return {};
		},
		components: {},
		mounted() {},
		methods: {},
		computed: {}
	};
</script>
