<template>
 <div >
     <button
        class="xui__button"
        :class="['xui__button--'+ type,'xui__button--'+size]"
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
      default: "plain"
    },
    size: {
      default: "normal"
    }
  },
  methods: {}
};
</script>

