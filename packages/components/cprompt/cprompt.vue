/** 提示框 */
<template>
	<transition name="cprompt">
		<div class="xui__cprompt--wrapper" v-if="show">
			<div class="item">
				<h4 class="title">
					<span class="iconfont icon-x-warn"></span>
					{{ title }}
				</h4>
				<p class="desc" v-html="desc"></p>
				<div class="btn-group">
					<x-button size="mini" @click="closeCPrompt">取消</x-button>
					<x-button size="mini" type="primary" @click="closeCPrompt"
						>确定</x-button
					>
				</div>
			</div>
		</div>
	</transition>
</template>
<script type="text/ecmascript-6">
	export default {
		name: 'XCPrompt',
		props: {
		},
		data() {
			//默认值
			return {
				show:false,
				duration:1000000,
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
			closeCPrompt(){
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
