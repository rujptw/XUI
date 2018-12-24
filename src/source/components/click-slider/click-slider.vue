<template>
 <div class="xui-click_slider">
    <span class="xui__span--normal"  v-for="(item,index) in arrlist"  :key="index" :class="activIndex===index? 'xui_span--active':''"  @click.prevent="sendTime(item,index)">{{item}}</span>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "XClickSlider",
  data() {
    return {
      arrlist: ["近三十日", "近十二月", "年"],
      activIndex: -1
    };
  },
  props: {},
  methods: {
    getFunc() {
      console.log("you are my Coke");
    },
    sendTime(time, index) {
      this.activIndex = index;
      this.$emit("listenTime", time);
    }
  }
};
</script>
