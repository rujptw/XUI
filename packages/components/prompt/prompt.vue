/** 提示框 */
<template>
	<transition name="prompt">
		<div class="xui__prompt--wrapper" v-if="show">
			<div class="item">
				<h4 class="title">{{ title }}</h4>
				<p class="desc" v-html="desc"></p>
				<span class="close" @click="closePrompt">×</span>
			</div>
		</div>
	</transition>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'XPrompt',
		props: {
		},
		data() {
			//默认值
			return {
				show:false,
				duration:3000,
				timer:null,
				closed:false,//弹窗是否关闭
			}
		},
		mounted() {
			this.startTimer()
		},
		beforeDestroy() {
			this.stopTimer()
		},
		watch:{
			closed:function(val){
				if(val){
					this.show = false;
					this.$el.addEventListener('animationend',this.destoryElement)
				}
			}
		},
		methods: {
			startTimer(){
				this.timer = setTimeout(()=>
				{
					this.show= false;
				},this.duration)
			},
			closePrompt(){
				this.closed = true;
				if(typeof this.onClose === 'function'){
					this.onClose(this)
				}
			},
			stopTimer(){
				if(this.timer){
					clearTimeout(this.timer)
				}
			},
			destoryElement(){
				this.$el.removeEventListener('animationend',this.destoryElement)
				this.$destory(this);
				this.$el.parentNode.removeChild(this.$el)
			}
		},
		computed: {}
	}
</script>
