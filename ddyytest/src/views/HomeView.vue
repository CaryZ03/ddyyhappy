<template>
  <div class="father">
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


    <!-- <div class="imageShow">
        <image-show></image-show>
    </div> -->

    <div class="module1">
      <div >
        <div class="module1_1">Unknown 未知</div>
        <div class="module1_2">便携式软件开发管理平台</div>
        <div class="module1_3">组建团队, 一键管理软件设计</div>
        <div class="module1_4">群聊私聊高效交流, 协作文档灵感碰撞</div>
        <div class="module1_5">设计原型直观简洁, 文件系统层次分明</div>
        <div class="module1_6">在开发中探索未知, 体验合作乐趣</div>
        <button class="module1_7">立即使用</button>
      </div>
    </div>

    <div class="module2">
      <div>
        <div class="module2_1">团队管理:</div>
        <div class="module2_2">告别杂乱无章</div>
        <div class="module2_3">团队间轻松切换, 提供不同团队成员身份,职责明确,权限分明,方便管理,满足第三方需求.</div>
        <img class="module2_img1" src="/media/team1.png" alt="团队管理">
      </div>
    </div>

    <div class="module3">
      <div>
        <span class="module3_1">团队交流:</span>
        <span class="module3_2">助力高效工作</span>
        <span class="module3_3">支持消息通知,不遗漏每一条重要讯息,可任意私聊一对一推进任务,支持消息合并转发,管理未读消息,方便您的工作.</span>
        <img class="module3_img1" src="/media/chat1.png" alt="团队交流">
      </div>
    </div>

    <div class="module4">
      <div>
        <span class="module4_1">共享文档:</span>
        <span class="module4_2">资源触手可及</span>
        <span class="module4_3">提供多种模板适应开发需求,轻松编辑使用,支持多种类型文件导出,多人协同光标编辑,实时同步.</span>
        <img class="module4_img1" src="/media/document1.png" alt="共享文档">
        <img class="module4_img2" src="/media/arrow.png" alt="共享文档">
        <img class="module4_img3" src="/media/pen.png" alt="共享文档">
      </div>
    </div>
    <div class="module5">
      <div>
        <span class="module5_1">设计原型:</span>
        <span class="module5_2">网页设计最强辅助</span>
        <span class="module5_3">界面简介易懂,适应不同尺寸,提供大量基础模板,支持在线预览实时查看,多光标协同实时编辑</span>
        <span class="module5_4">不仅是项目团队管理工具,更是强大的软件开发创作平台</span>
        <img class="module5_img1" src="/media/prototype1.png" alt="设计原型">
      </div>
    </div>
    <div class="module6">
      <div>
        <span class="module6_1">Unknown</span>
        <span class="module6_2">现在开始,探索未知</span>
        <span class="module6_3">强大创作工具,高效管理支持</span>
        <span class="module6_4">突破个人开发界限,探索团队无限潜能</span>
        <button class="module6_5">立即使用</button>
      </div>
    </div>
    <div class="module7">
      <div>
        <span class="module7_1">制作团队</span>
        <span class="module7_2">花季少男少女收容中心</span>
        <span class="module7_3">成员信息</span>
        <span class="module7_4">CaryZ</span>
        <span class="module7_5">Vioriey</span>
        <span class="module7_6">手中锋芒未冷</span>
        <span class="module7_7">Xenon</span>
        <span class="module7_8">一支铅笔</span>
        <span class="module7_9">Morty</span>
        <span class="module7_10">联系方式</span>
        <span class="module7_11">2843004375@qq.com</span>
        <span class="module7_12">2105907155@qq.com</span>
        <span class="module7_13">1124578445@qq.com</span>
        <span class="module7_14">2283509194@qq.com</span>
        <span class="module7_15">850587960@qq.com</span>
        <span class="module7_16">326855092@qq.com</span>
        <span class="module7_17">团队地址</span>
        <span class="module7_18">新主楼113研讨室</span>
      </div>
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
    height: 312.5vw;
    background: linear-gradient(to right, rgb(116, 135, 200), rgb(137, 198, 198));
}
.father{
  height: 312vw;
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
  display: flex;
  width: 15vw;
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

.float-start-button span {
    font-size: 1.25vw;
    color: rgb(3, 51, 69);
    text-align: center;
}
.module1 {
  top: 4vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 49vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px 15px 15px 15px;
}
.module1_1{
  margin-top: 10vw;
  position: absolute;
  font-size: 4vw;
  margin-left: 7vw;
  font-weight: bold;
}
.module1_2{
  font-size: 4vw;
  margin-left: 7vw;
  margin-top: 15.5vw;
  position: absolute;
  font-weight: bold;
}
.module1_3{
  font-size: 1.25vw;
  margin-left: 7.25vw;
  position: absolute;
  margin-top: 23vw;
}
.module1_4{
  font-size: 1.25vw;
  margin-left: 7.25vw;
  position: absolute;
  margin-top: 25vw;
}
.module1_5{
  font-size: 1.25vw;
  margin-left: 7.25vw;
  position: absolute;
  margin-top: 27vw;
}
.module1_6{
  font-size: 1.25vw;
  margin-left: 7.25vw;
  position: absolute;
  margin-top: 29vw;
}
.module1_7{
  font-size: 1.25vw;
  margin-left: 7.25vw;
  position: absolute;
  margin-top: 33vw;
  padding-left: 1.7vw;
  padding-right: 1.7vw;
  padding-top: 0.8vw;
  padding-bottom: 0.8vw;
  background-color: black;
  border-radius: 5px;
  border-color: #000;
  color: #eae4f9

}
.module2 {
  top: 54.5vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 49vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  15px 15px 15px 15px;
}
.module2_1{
  margin-top: 20vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module2_2{
  margin-top: 23.5vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module2_3{
  margin-top: 28vw;
  position: absolute;
  margin-left: 7.25vw;
  font-size: 1.25vw;
  margin-right: 65vw;
  text-align: left;
  line-height: 2.25vw;
}
.module2_img1{
  width: 10vw;
  margin-top: 8vw;
  position: absolute;
  margin-left: 6.75vw;
  margin-right: 65vw;
}
.module3 {
  top: 105vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 49vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  15px 15px 15px 15px;
}
.module3_1{
  margin-top: 20vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module3_2{
  margin-top: 23.5vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module3_3{
  margin-top: 28vw;
  position: absolute;
  margin-left: 7.25vw;
  font-size: 1.25vw;
  margin-right: 65vw;
  text-align: left;
  line-height: 2.25vw;
}
.module3_img1{
  width: 13vw;
  margin-top: 8vw;
  position: absolute;
  margin-left: 6.5vw;
  margin-right: 65vw;
}
.module4 {
  top: 155.5vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 49vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  15px 15px 15px 15px;
}
.module4_1{
  margin-top: 20vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module4_2{
  margin-top: 23.5vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module4_3{
  margin-top: 28vw;
  position: absolute;
  margin-left: 7.25vw;
  font-size: 1.25vw;
  margin-right: 65vw;
  text-align: left;
  line-height: 2.25vw;
}
.module4_img1{
  width: 8vw;
  margin-top: 10vw;
  position: absolute;
  margin-left: 6.5vw;
  margin-right: 65vw;
}
.module4_img2{
  width: 6vw;
  margin-top: 11vw;
  position: absolute;
  margin-left: 15vw;
  margin-right: 65vw;
}
.module4_img3{
  width: 7vw;
  margin-top: 11vw;
  position: absolute;
  margin-left: 21vw;
  margin-right: 65vw;
}
.module5 {
  top: 206vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 49vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  15px 15px 15px 15px;
}
.module5_1{
  margin-top: 20vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module5_2{
  margin-top: 23.5vw;
  position: absolute;
  margin-left: 7vw;
  font-size: 2vw;
  font-weight: bold;
}
.module5_3{
  margin-top: 28vw;
  position: absolute;
  margin-left: 7.25vw;
  font-size: 1.25vw;
  margin-right: 65vw;
  text-align: left;
  line-height: 2.25vw;
}
.module5_4{
  margin-top: 36vw;
  position: absolute;
  margin-left: 7.25vw;
  font-size: 1.25vw;
  margin-right: 65vw;
  text-align: left;
  line-height: 2.25vw;
}
.module5_img1{
  width: 12vw;
  margin-top: 7.5vw;
  position: absolute;
  margin-left: 6.75vw;
  margin-right: 65vw;
}
.module6 {
  top: 256.5vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 44vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  15px 15px 0px 0px;
}
.module6_1 {
  margin-top: 10vw;
  position: absolute;
  margin-left: 42.5vw;
  font-size: 3vw;
  font-weight: bold;
}
.module6_2{
  margin-top: 13.5vw;
  position: absolute;
  margin-left: 39vw;
  font-size: 2.5vw;
  font-weight: bold;
}
.module6_3{
  margin-top: 19vw;
  position: absolute;
  margin-left: 40.75vw;
  font-size: 1.25vw;
  text-align: left;
}
.module6_4{
  margin-top: 21.5vw;
  position: absolute;
  margin-left: 38vw;
  font-size: 1.25vw;
  text-align: left;
}
.module6_5{
  font-size: 1.25vw;
  margin-left: 42.5vw;
  position: absolute;
  margin-top: 27vw;
  padding-left: 4vw;
  padding-right: 4vw;
  padding-top: 0.8vw;
  padding-bottom: 0.8vw;
  background-color: black;
  border-radius: 5px;
  border-color: #000;
  color: #eae4f9
}
.module6 {
  top: 256.5vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 33.5vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  15px 15px 0px 0px;
}
.module7 {
  top: 290vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 21vw;
  width: 98%;
  background-color:  rgba(255, 255, 255, 0.5);
  border-radius:  0px 0px 15px 15px;
}
.module7_1{
  position: absolute;
  margin-left: 14.25vw;
  font-size: 1vw;
  font-weight: bold;
}
.module7_2{
  margin-top: 3vw;
  position: absolute;
  margin-left: 10vw;
  font-size: 1vw;
}
.module7_3{
  position: absolute;
  margin-left: 36vw;
  font-size: 1vw;
  font-weight: bold;
}
.module7_4{
  margin-top: 3vw;
  position: absolute;
  margin-left: 37vw;
  font-size: 1vw;
}
.module7_5{
  margin-top: 6vw;
  position: absolute;
  margin-left: 36.85vw;
  font-size: 1vw;
}
.module7_6{
  margin-top: 9vw;
  position: absolute;
  margin-left: 35vw;
  font-size: 1vw;
}
.module7_7{
  margin-top: 12vw;
  position: absolute;
  margin-left: 37vw;
  font-size: 1vw;
}
.module7_8{
  margin-top: 15vw;
  position: absolute;
  margin-left: 36.25vw;
  font-size: 1vw;
}
.module7_9{
  margin-top: 18vw;
  position: absolute;
  margin-left: 37.25vw;
  font-size: 1vw;
}

.module7_10{
  position: absolute;
  margin-left: 58vw;
  font-size: 1vw;
  font-weight: bold;
}
.module7_11{
  margin-top: 3vw;
  position: absolute;
  margin-left: 54.25vw;
  font-size: 1vw;
}
.module7_12{
  margin-top: 6vw;
  position: absolute;
  margin-left: 54.25vw;
  font-size: 1vw;
}
.module7_13{
  margin-top: 9vw;
  position: absolute;
  margin-left: 54.25vw;
  font-size: 1vw;
}
.module7_14{
  margin-top: 12vw;
  position: absolute;
  margin-left: 54.25vw;
  font-size: 1vw;
}
.module7_15{
  margin-top: 15vw;
  position: absolute;
  margin-left: 54.55vw;
  font-size: 1vw;
}.module7_16{
  margin-top: 18vw;
  position: absolute;
  margin-left: 54.55vw;
  font-size: 1vw;
}
.module7_17{
  position: absolute;
  margin-left: 78vw;
  font-size: 1vw;
  font-weight: bold;
}
.module7_18{
  margin-top: 3vw;
  position: absolute;
  margin-left: 76.25vw;
  font-size: 1vw;
}
</style>
  