<template>
  <div>
    <div class="nav">
    <div class="logo">Unknown</div> 
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="Guidance">Guidance</a></li>
        <li><a href="#">WorkSpace</a></li>
        <li><a href="#">Login</a></li>
        <div class="nav-box"></div>
      </ul>
    </div>
    <transition name="slide-fade">
        <div class="float-start-button">
            <div class="text-slide">即刻开始</div>
            <div class="fade-out"> >></div>
        </div>
    </transition>
    <transition name="slide-fade">
      <div class="scroll-show" :style="scrollShowStyles" v-show="shouldAnimate">
        <img src="/media/1.jpg" alt="hihi">
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    props: {
      msg: String
    },
    data() {
      return {
        scroll: 0,
        animThreshold: 400, // 设置动画阈值
      };
    },
    mounted() {
      window.addEventListener("scroll", this.scrollChange)
    },
    methods: {
      scrollChange() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(this.scroll)
      }
    },
    computed: {
      shouldAnimate() {
        return this.scroll > this.animThreshold;
      },
      scrollShowStyles() {
        return {
          transform: this.shouldAnimate ? 'translateX(100%)' : 'translateX(0%)',
          opacity: this.shouldAnimate ? '1' : '0'};
      }
    },
  }
  

</script>

<style>
*{
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
}
body{
    height: 3000px;
    background: linear-gradient(to right, rgb(116, 135, 200), rgb(137, 198, 198));
}

.nav{
    width: 100%;
    height: 3vw;
    position: fixed;
    display: flex;
    top: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 10px 10px;
    background-color:  rgba(255, 255, 255, 0.8);
    z-index: 666;
}

.logo{
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  right: 5%;
  margin-left: 3%;
  color: rgb(31, 24, 75);
  font-size: 1vw;
  font-weight: bold;
}

.nav ul{
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    right: 5%;
    margin-left: 47%;
}
.nav ul .nav-box{
    position: absolute;
    bottom: 0;
    left: 0;
    /* 如果导航栏就六个导航，那么每个导航的宽度都是整个导航
    的六分之一 */
    width: calc((40% / 4)*1);
    height: 0.8vw;
    border-radius: 10px;
    transition: .5s;
}
.nav ul li{
    width: 100%;
    text-align: center;
}
.nav ul li a{
    color: rgb(3, 51, 69);
    font: 1vw '优设标题黑';
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
    font-weight: bold;
}
.nav ul li:nth-child(1):hover~.nav-box{
    left: calc(40% / 4 *0 + 60%);
    background-color: rgb(168, 187, 252);
}
.nav ul li:nth-child(2):hover~.nav-box{
    left: calc(40% / 4 *1 + 60%);
    background-color: rgb(163, 217, 252);
}
.nav ul li:nth-child(3):hover~.nav-box{
    left: calc(40% / 4 *2 + 60%);
    background-color: #95ded5;

}
.nav ul li:nth-child(4):hover~.nav-box{
    left: calc(40% / 4 *3 + 60%);
    background-color: #c5e0a9;
}
.float-start-button {
  position: fixed;
  right: 0;
  top: 70%;
  z-index: 6666;
  padding: 1.5vw;
  width: 10vw;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 2px 15px 0px rgba(9,41,77,0.15);
  cursor: move;
}
.float-start-button span {
    font-size: 1.25vw;
    color: rgb(3, 51, 69);
    text-align: center;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  opacity: 0;
  transition: opacity 0.5s ease; /* 动画过渡效果 */
}
.float-start-button {
  position: fixed;
  right: 0;
  top: 70%;
  z-index: 6666;
  padding: 1.5vw;
  display: flex;
  width: 10vw;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 2px 15px 0px rgba(9,41,77,0.15);
  cursor: move;
}

.float-start-button div {
    font-size: 1.5vw;
    color: #333333;
    text-align: center;
}

.text-slide {
  transition: transform 0.8s ease;
  margin-left: 1.5vw;
  text-align: center;
}

.float-start-button:hover .text-slide {
  transform: translateX(-10px); /* 鼠标悬停时向左平移 10 像素 */
}

.fade-out {
  opacity: 0; /* 一开始隐藏 */
  margin-top: 0.3vw;
  transition: opacity 0.8s ease; /* 过渡时间为0.3秒 */
}

.float-start-button:hover .fade-out {
  opacity: 1; /* 鼠标悬停时显示 */
}

.scroll-show {
  position: absolute;
  top: 800px;
  left: 0;
  opacity: 0; 
  transition: opacity 1.5s ease, transform 1.5s ease; 
}

</style>
  