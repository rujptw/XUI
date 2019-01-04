<template>
	<div class="xui__show-panel">
		<h3 class="xui__show-panel--title"><slot name="title"></slot></h3>
		<ul class="xui__show-panel--list">
			<li class="item" v-for="(item,index) in lists" :key="index">
				<img class="img" :src="item.imgUrl" alt="展示图片" />
				<p class="title">{{ item.title }}</p>
				<span class="desc">{{ item.desc }}</span>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: "XShowPanel",
		props: {
			listData: {
				type: Array
			}
		},
		data() {
			return {
				lists: this.listData
			};
		},
		components: {},
		mounted() {
			console.log(this.listData);
		},
		methods: {},
		computed: {}
	};
</script>
