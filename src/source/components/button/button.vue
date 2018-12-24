<template>
 <div >
     <button
        class="xui__button"
        :class="['xui__button--'+ type,'xui__button--'+size]"
         @click="handleClick"
     >

     <i class ="iconfont icon-loading"></i>
    <slot></slot>
     </button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "XButton",
  data() {
    return {};
  },
  props: {
    type: {
      type:String,
      default: "plain"
    },
    size: {
      type:String,
      default: "normal"
    },
    loading:{
      type:Boolean,
      default: false
    }
  },
  methods: {
    handleClick(){
      this.$emit("click")
    }
  }
};
</script>
