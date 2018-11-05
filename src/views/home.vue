<template>
 <div class="page">
   <p>button统一高度为42px</p>
   <x-button>width:160px</x-button>
   <x-button type="primary">width:160px</x-button>
   <x-button type="primary" size="big">width:330px</x-button>
   <x-button type="primary" size="small">width:80px</x-button>
   <img class="x-button" :src="button" alt="">
 </div>
</template>

<script type="text/ecmascript-6">
import XClickSlider from "../source/components/click-slider";
import XDragSlider from "../source/components/drag-slider";
import XButton from "../source/components/button";
import button from "imgs/button.png";
export default {
  data() {
    return {
      button
    };
  },
  props: {},
  components: {
    XClickSlider,
    XDragSlider,
    XButton
  }
};
</script>

<style lang="stylus">
</style>
