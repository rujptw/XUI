<template>
  <div class="xui-drag_slider">
    <div class="xui__body--normal">
      <span class="xui__item--normal" v-for="item in options" :key="item.text">{{item.text}}</span>
    </div>
    <div class="xui__slider">
      <span class="xui__slider__item"></span>
      <span class="xui__slider__item"></span>
      <span class="xui__slider__item"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "XDragSlider",
  data() {
    return {};
  },
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          {
            text: "1个月",
            value: 1
          },
          {
            text: "3个月",
            value: 3
          },
          {
            text: "6个月",
            value: 6
          },
          {
            text: "1年",
            value: 12
          }
        ];
      }
    }
  }
};
</script>
