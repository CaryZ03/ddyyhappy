<template>
  <div>
    <div class="nav">
    <div class="logo">Unknown</div> 
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Guidance</a></li>
        <li><a href="#">WorkSpace</a></li>
        <li><a href="#">Login</a></li>
        <div class="nav-box"></div>
      </ul>
    </div>
    <div class="float-start-button" v-show="showText" @mouseenter="showText = true" @mouseleave="showText = false">
        <transition name="fade">
            <div class="hover-box">即刻开始&nbsp;&gt;&gt;</div>
        </transition>
    </div>
    <div class="float-start-button" v-show="!showText" @mouseenter="showText = true" @mouseleave="showText = false">
            <div class="default-box">即刻开始</div>
    </div>
    <!-- <div class="imageShow">
        <image-show></image-show>
    </div> -->
    <div>
        <transition-group name="slide">
            <div v-if="showImage" class="image">
                <img src="/media/1.jpg" alt="Image">
            </div>
        </transition-group>
    </div>
  </div>
</template>

<script>
    // import ImageShow from '@/components/ImageShow.vue';
    export default {
        name: 'HomeView',
        components: {
            // ImageShow,
        },
        data() {
            return {
                showText: false,
                showImage: true
            };
        },
        methods: {
            checkScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                // const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;

                if (scrollTop >= 1500) {
                    this.showImage = true;
                }
            },
        },
        mounted() {
            window.addEventListener('scroll', this.checkScroll);
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
    height: 4000px;
    background-color: #8da1f8;
}

.nav{
    width: 100%;
    height: 4.5vw;
    position: fixed;
    display: flex;
    top: 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 10px 10px;
    background-color: #fff;
}

.logo{
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  right: 5%;
  margin-left: 3%;
  color: rgb(70, 100, 180);
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
    color: rgb(70, 100, 180);
    font: 1.6vw '优设标题黑';
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
}
.nav ul li:nth-child(1):hover~.nav-box{
    left: calc(40% / 4 *0 + 60%);
    background-color: rgb(250, 190, 250);
}
.nav ul li:nth-child(2):hover~.nav-box{
    left: calc(40% / 4 *1 + 60%);
    background-color: red;
}
.nav ul li:nth-child(3):hover~.nav-box{
    left: calc(40% / 4 *2 + 60%);
    background-color: #d18df8;
}
.nav ul li:nth-child(4):hover~.nav-box{
    left: calc(40% / 4 *3 + 60%);
    background-color: #ffb1b1;
}
.float-start-button {
  position: fixed;
  right: 0;
  top: 70%;
  z-index: 6666;
  padding: 1.5vw;
  width: 10vw;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 2px 15px 0px rgba(9,41,77,0.15);
  cursor: move;
  div {
    font-size: 1.25vw;
    color: #333333;
    text-align: center;
  }
}
.float-start-button span {
    font-size: 1.25vw;
    color: #333333;
    text-align: center;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.image {
  opacity: 1;
  position: fixed;
  top: 50%; /* 设置垂直位置为屏幕的中间 */
  left: 50%; /* 设置水平位置为屏幕的中间 */
}
</style>
  