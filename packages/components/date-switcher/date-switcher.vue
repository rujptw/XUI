/**‘
日期切换组件
*/
<template>
  <div class="xui-date-switcher">
    <!--左侧按钮-->
    <div class="common-btn" @click="prevMonth">
      <i
        class="iconfont icon-x-arrow_left"
        :class="{disable:parseInt(beginTime)<parseInt(switchTime)}"
      ></i>
    </div>
    <!--中间内容区-->
    <div class="month-container">{{switchYear}} 年 {{switchMonth}} 月</div>
    <!--右侧按钮-->
    <div class="common-btn" @click="nextMonth">
      <i
        class="iconfont icon-x-arrow_right"
        :class="{disable:parseInt(beginTime)<=parseInt(switchTime)}"
      ></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "XDateSwitcher",
  data() {
    return {
      nowTime: "", //当前时间
      beginTime: "", //开始时间
      switchTime: "", //切换时间，该时间与当前时间相同，因为数据是实时的
      switchMonth: "", //切换月
      switchYear: "" //切换年
    };
  },
  mounted() {
    this.getBeginTime();
    this.getSwitchTime();
  },
  watch: {},
  methods: {
    getBeginTime() {
      this.nowTime = new Date();
      let now = this.nowTime;
      let nowMonth = now.getMonth() + 1; //国外算的月份要比我们少1，所以要加1
      let nowYear = now.getFullYear();
      if (nowMonth < 10) {
        nowMonth = "0" + nowMonth;
      }
      this.beginTime = parseInt(nowYear + "" + nowMonth);
    },
    getSwitchTime() {
      this.switchMonth = this.nowTime.getMonth() + 1;
      this.switchYear = this.nowTime.getFullYear();
      if (this.switchMonth === 0) {
        //处理向前推移月份为0的情况
        this.switchMonth = 12;
        this.switchYear -= 1;
      }
      if (this.switchMonth < 10) {
        this.switchMonth = "0" + this.switchMonth;
      }
      this.switchTime = parseInt(this.switchYear + "" + this.switchMonth);
    },
    prevMonth() {
      this.nowTime.setMonth(this.nowTime.getMonth() - 1);
      this.getSwitchTime();
      this.sendSwitchTime();
    },
    nextMonth() {
      if (this.switchTime < this.beginTime) {
        this.nowTime.setMonth(this.nowTime.getMonth() + 1);
        this.getSwitchTime();
        this.sendSwitchTime();
      }
    },
    // 将月份发射出去
    sendSwitchTime() {
      let stringTime = this.switchTime + "";
      this.$emit("switchTime", stringTime);
    }
  }
};
</script>
