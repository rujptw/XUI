<template>
 <div class="page">
   <x-click-slider></x-click-slider>
   <hr>
   <x-drag-slider></x-drag-slider>
   <x-button>近三十日</x-button>
   <x-button type="activate">近三十日</x-button>

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
