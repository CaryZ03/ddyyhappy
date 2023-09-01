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
    <transition name="slide-fade">
        <div class="float-start-button">
            <div class="text-slide">即刻开始</div>
            <div class="fade-out"> >></div>
        </div>
    </transition>


    <!-- <div class="imageShow">
        <image-show></image-show>
    </div> -->
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
  display: flex;
  width: 15vw;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px 0px 0px 8px;
  box-shadow: 0px 2px 15px 0px rgba(9,41,77,0.15);
  cursor: move;
}
.float-start-button div {
    font-size: 2vw;
    color: #333333;
    text-align: center;
}

.text-slide {
  transition: transform 0.8s ease;
  margin-left: 3.5vw;
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

</style>
  