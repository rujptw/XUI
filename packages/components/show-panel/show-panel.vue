<template>
  <div class="xui__show-panel">
    <h3 class="xui__show-panel--title">
      <slot name="title"></slot>
    </h3>
    <ul class="xui__show-panel--list"></ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "XShowPanel",
  props: {},
  data() {
    return {};
  },
  components: {},
  mounted() {
    console.log(this);
  },
  methods: {},
  computed: {}
};
</script>
