<template>
  <div>
    <!--导航条-->
    <nav class="nav">
      <div class="container">
        <div class="logo">YeahZ</div>
        <div class="nav-link">
          <ul>
            <li><router-link to='/home'>首页</router-link></li>
            <li><router-link to='/category'>分类</router-link></li>
            <li><router-link to='/tag'>标签</router-link></li>
            <li><router-link to='/pigeonhole'>归档</router-link></li>
            <li><router-link to='/about'>关于</router-link></li>
          </ul>
        </div>
        <div class="search">
          <input placeholder="输入搜索词" name="word" v-model="word" autocomplete="off" :style="'right:'+right" class="search-text">
          <a :href="'https:www.baidu.com/s?word=' + word + ' site:[yeahz.cn]'" target="_blank" class="baidu-link" :style="'z-index:'+zIndex">搜</a>  
          <span class="glyphicon glyphicon-search" @click="openSearch"></span>
        </div>
      </div>
    </nav>
    <div class="back-img">
      <div><img src="./pictures/city.gif"></div>
    </div>
    <!--主体-->
    <div class="back">

      <div class="main">
        <div class="list">
          <div class="block">
            <h5>小玩具</h5>
            <ul>
              <li><a href="./keyboard">键盘侠</a></li>
            </ul>
          </div>
          <div class="block">
            <h5>链接</h5>
            <ul>
              <li><a href="https://dremy.cn">dremy</a></li>
              <li><a href="http://taobaofed.org">taobao fed</a></li>
              <li><a href="http://www.famanoder.com">famanoder</a></li>
            </ul>
          </div>
        </div>
        <div class="content">
          <div class="include">
            <transition name='page'>
              <router-view></router-view>
            </transition>
          </div>  
        </div>
      </div>
      <!--页脚-->
      <footer class="footer">
        <div class="footercontent">
          <div class="copyright">Copyright &copy {{copyYear}} yeahz.cn</div>
        </div>
      </footer>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default{
    name: 'app',
    data() {
      return {
        word: '',
        right: '',
        zIndex: 0,
        copyYear: new Date().getUTCFullYear()
      }
    },
    methods: {
      openSearch: function(){
        var vm = this;
        vm.right = '0px';
        vm.zIndex = 1;
        var searchInterval = setInterval(function(){
          if(!vm.word){
            vm.right = '-120px';
            vm.zIndex = 0;
            clearInterval(searchInterval);
          }
        }, 5000)
      }
    }
  }
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

@font-face{
  font-family:showcard;
  src: url(./styles/15438025.ttf);
}
/*vue transition*/
.page-enter-active{
  transition: transform 1s;
}

.page-enter{
  transform: translateY(50px);
}

body{
  margin: 0px;
  padding: 0px;
  font-family:  'Microsoft YaHei';
}

.nav{
  background-color: rgb(58, 126, 129);/*#141d27*/;
  width: 100%;
  height: 60px;
  opacity:0.8;
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
}

.nav .container{
  max-width: 900px;
  min-width: 350px;
  color: white;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
}

.logo{
  float: left;
  font-size: 30px;
  font-family: showcard;
}

.nav-link{
  float: left;
}

.nav-link ul{
  padding: 12px 40px 0px 50px;
  margin-bottom: auto;
}

.nav-link li{
  display: inline;
  margin-right: 15px;
}

.nav-link li a{
  text-decoration: none;
  font-size: 14px;
  color: white;
}

.search{
  overflow: hidden;
  position: absolute;
  right: 15px;
} 

.search-text{
  background: rgb(58, 126, 129);
  border: 0px;
  width: 100px;
  border-bottom: 1px solid #bdc3c7;
  outline: none;
  font-size: 14px;
  position: relative;
  right: -120px;
  transition: right .5s;
}

.baidu-link{
  position: absolute;
  padding-top: 12px;
  opacity: 0;
}

.search span{
  padding-top: 14px; 
  font-size: 16px;
  color: white;
}

.search span:hover{
  cursor: pointer;
}

.back-img{
  width: 100%;
  height: 250px;
  z-index: -1;
  position: fixed;
  background-color: #9ed7da;
}

.back-img div{
  display: flex;
  max-width: 650px;
  height: 100%;
  margin: 0 auto;
}

.back-img img{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}


/*--------main----------*/
.back{
  background-color: #ecf0f1;
  z-index: 2;
  position: absolute;
  top: 250px;
  width: 100%;
}

.main{
  max-width: 920px;
  margin: 0px auto; 
  padding-top: 15px;
  color: #6C7A78;
}

.list{
  width: 23%;
  float: left;
  border: 1px solid #b4dee0;
  background-color: white;
}

.block{
  margin-top: 50px;
}

.block h5{
  padding-left: 20px;
}

.block ul{
  width: 80%;
  padding: 0px;
  margin: 20px auto;
}

.block li{
  border-bottom: 1px solid #bdc3c7;
  list-style: none;
  margin-bottom: 30px;
}

.content{
  width: 75%;
  float: right;
  background-color: white;
  border: 1px solid #b4dee0;
}

.include{
  padding-top: 10px;
  width: 95%; 
  margin: 0px auto;
}

/*-------页脚------*/
.footer{
  clear: both;
  width: 100%;
  height: 90px;
  background-color: rgb(58, 126, 129);
  position: relative;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footercontent{
  font-size: 16px;
  max-width: 700px;
  color: #bdc3c7;
}

@media screen and (max-width: 920px){
  .list{
    display: none;
  }
  .content{
    width: 100%;
  }
}

@media screen and (max-width: 480px){
  /*.nav{
    height: 80px;
  }
  .container{
    display: flex;
    flex-direction: column;
  }
  .nav-link ul{
    padding: 0px;
  }*/
  .search{
    display: none;
    /*position: absolute;
    right: 20px;
    top: 8px;*/
  }
}
</style>