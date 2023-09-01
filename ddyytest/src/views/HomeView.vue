<template>
  <div class="father">
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
    <div class="float-start-button">
      <span>即刻开始</span>
    </div>

    <div class="module1">
      <div >
        <div class="module1_1">Unknown 未知</div>
        <div class="module1_2">便携式软件开发管理平台</div>
        <div class="module1_3">组建团队, 一键管理软件设计</div>
        <div class="module1_4">群聊私聊高效交流, 协作文档灵感碰撞</div>
        <div class="module1_5">设计原型直观简洁, 文件系统层次分明</div>
        <div class="module1_6">在开发中探索未知, 体验合作乐趣</div>
        <button class="model1_7">立即使用</button>
      </div>
    </div>

    <div class="module2">
      <div>
        <div>团队管理:</div>
        <div>告别杂乱无章</div>
        <div>团队间轻松切换, 提供不同团队成员身份,职责明确,权限分明,方便管理,满足第三方需求.</div>
      </div>
    </div>

    <div class="module3">
      <div>
        <span>团队交流:</span>
        <span>助力高效工作</span>
        <span>支持消息通知,不遗漏每一条重要讯息,可任意私聊一对一推进任务,支持消息合并转发,管理未读消息,方便您的工作.</span>
      </div>
    </div>

    <div class="module4">
      <div>
        <span>共享文档:</span>
        <span>资源触手可及</span>
        <span>提供多种模板适应开发需求,轻松编辑使用,支持多种类型文件导出,多人协同光标编辑,实时同步.</span>
      </div>
    </div>
    <div class="module5">
      <div>
        <span>设计原型:</span>
        <span>网页设计最强辅助</span>
        <span>界面简介易懂,适应不同尺寸,提供大量基础模板,支持在线预览实时查看,多光标协同实时编辑</span>
        <span>不仅是项目团队管理工具,更是强大的软件开发创作平台</span>
      </div>
    </div>
    <div class="module6">
      <div>
        <span>Unknown</span>
        <span>现在开始,探索未知</span>
        <span>强大创作工具,高效管理支持</span>
        <span>突破个人开发界限,探索团队无限潜能</span>
        <button>立即使用</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    props: {
      msg: String
    }
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
    height: 253.5vw;
    background: linear-gradient(to right, rgb(116, 135, 200), rgb(137, 198, 198));
}
.father{
  top: 0;
  height: 252vw;
}
.nav{
    width: 100%;
    height: 4.5vw;
    position: sticky;
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
  font-size: 1.6vw;
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
    font: 1.6vw '优设标题黑';
    display: block;
    width: 100%;
    height: 100%;
    line-height: 70px;
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
.module1 {
  top: 6vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 40vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px 15px 0px 0px;
}

.module2 {
  top: 46vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 40vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  0px 0px 15px 15px;
}

.module3 {
  top: 87.5vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 40vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  0px 0px 15px 15px;
}

.module4 {
  top: 129vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 40vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  0px 0px 15px 15px;
}

.module5 {
  top: 170.5vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 40vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  0px 0px 15px 15px;
}

.module6 {
  top: 212vw;
  margin-left: 1%;
  position: absolute;
  display: flex;
  height: 40vw;
  width: 98%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius:  0px 0px 15px 15px;
}
</style>
  