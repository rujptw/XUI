<template>
 <div class="page">
   <x-click-slider></x-click-slider>
   <hr>
   <x-drag-slider></x-drag-slider>
   <hr>
   <x-button>近三十日</x-button>
   <x-button type="primary">160px</x-button>
   <x-button type="primary" size="big">330px</x-button>
   <x-button type="primary" size="small">330px</x-button>
  
 </div>
</template>

<script type="text/ecmascript-6">
import XClickSlider from "../source/components/click-slider";
import XDragSlider from "../source/components/drag-slider";
import XButton from "../source/components/button";
export default {
  data() {
    return {};
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
