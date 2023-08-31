<template>
  <div class="header-main" :style="getColor()">
    <div class="h5-header">
        <div class="header-left"><i class="okicon icon-0121"></i></div>
        <div class="header-right">
            <span :class="{active: active == 0}">Home</span>
            <span :class="{active: active == 1}">Guidance</span>
            <span :class="{active: active == 1}">WorkSpace</span>
            <span :class="{active: active == 2}">Login</span>
        </div>
    </div>
  </div>
</template>

<style>
.header-main{
  min-width: 1200px;
  background:rgba(255, 255, 255, 0.15);
  position: fixed;
  top:0;
  left: 0;
  right: 0;
}

.active{
  color: #FFA624;
  border-bottom: 4px solid #FFA624;
  font-weight: 800;
}
</style>

<script>
export default {
  getColor() {
    //当滚动距离超过导航栏高度时改变背景色
    if (this.scrollTop > 45) {
      return {
        background: "#487DFE"
      }
    } else {
      return false
    }
  }
}
</script>