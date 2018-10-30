<template>
 <div >
     <button
        class="xui__button"
        @click="activeButton"
        :class="['xui__button--'+ type]"
     >
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
      default: "default"
    }
  },
  methods: {
    activeButton() {
      this.type = "activate";
    }
  }
};
</script>

<style lang="stylus">
</style>
