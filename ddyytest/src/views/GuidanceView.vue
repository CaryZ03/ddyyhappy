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
    <div class="float-start-button">
      <span>即刻开始</span>
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
</style>
  