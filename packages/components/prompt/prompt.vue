/** 提示框 */
<template>
	<transition name="prompt-transition">
		<div class="xui__prompt">
			<h4 class="title">{{ title }}</h4>
			<div class="desc" v-html="desc"></div>
		</div>
	</transition>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'XPrompt',
		props: {
			title: {
				type: String,
				default: "标题"
			},
			desc: {
				type: String,
				default: "<span>这是描述,这是描述,这是描述,这是描述,这是描述,这是描述,这是描述,这是描述,这是描述,这是描述</span>"
			},
			duration: {
				type: Number,
				default: 500
			},
			offset: {
				type: Number
			},
			showClose: {
				type: Boolean,
				default: true,
			}
		},
		data() {
			return {

			}
		},
		components: {

		},
		mounted() {},
		methods: {},
		computed: {}
	}
</script>
