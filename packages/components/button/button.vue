<template>
  <div>
    <button
      class="xui__button"
      :class="['xui__button--'+ type,
        'xui__button--'+size,
        {'is-disabled':disabled}
        ]"
      @click="handleClick"
      :disabled="disabled"
    >
      <slot></slot>
      <i v-if="icon" class="iconfont" :class="icon? icon:''"></i>
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
      type: String,
      default: "plain"
    },
    size: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
