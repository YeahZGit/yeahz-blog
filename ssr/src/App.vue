<template>
  <div id="app">
    <!--导航条-->
    <nav class="nav">
      <div class="container">
        <div class="logo">YeahZ</div>
        <div class="nav-link">
          <ul>
            <li><router-link to='/home'>首页</router-link></li>
            <li><router-link to='/categories'>分类</router-link></li>
            <li><router-link to='/tags'>标签</router-link></li>
            <li><router-link to='/archives'>归档</router-link></li>
            <li><router-link to='/about'>关于</router-link></li>
          </ul>
        </div>
        <!--搜索框-->
        <div class="search">
          <input placeholder="搜索" type="text" v-model="word" :style="'width:'+width" class="search-text" @blur="toggleSearch">
          <span class="glyphicon glyphicon-search" @click="toggleSearch"></span>
        </div>
        <!--下拉菜单按钮-->
        <div class="menu" @click="dropdown()">
          <span class="glyphicon glyphicon-menu-hamburger"></span>
        </div>
      </div>
    </nav>
    <!--下拉菜单-->
    <transition name="drop">
      <div class="drop-nav-box" v-if='showDropNav'>
        <div class="drop-nav">
          <router-link to='/home'>首页</router-link>
          <router-link to='/categories'>分类</router-link>
          <router-link to='/tags'>标签</router-link>
          <router-link to='/archives'>归档</router-link>
          <router-link to='/about'>关于</router-link>
        </div>
      </div>
    </transition>
    
    <!--背景图片-->
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
        <div class="content" id="content">
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
          <div class="copyright">Copyright &copy 2017 yeahz.cn</div>
          <div class="icp">皖ICP备 17016988号</div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </div>
  </div>
</template>


<script>
  export default{
    name: 'app',
    data() {
      return {
        showDropNav: false,
        showSearch: false,
        word: '',
        width: ''
      }
    },
    methods: {
      dropdown: function() {
        this.showDropNav = !this.showDropNav;
      },
      toggleSearch: function() {
        var vm = this;
        vm.showSearch = !vm.showSearch;
        if(vm.showSearch) {
          vm.width = '120px';
        }
        else {
          vm.width = '0px';
        }
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
.page-enter{
  transform: translateY(50px);
}
.page-enter-active{
  transition: transform 1s;
}

.drop-enter,.drop-leave-active{
  transform: translateY(-50px);
}
.drop-enter-active,.drop-leave-active{
  transition: transform .5s;
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
  display: flex;
  align-items: center;
} 

.search-text{
  background-color: rgb(58, 126, 129);
  margin-left: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #bdc3c7;
  width: 0px;
  transition: width .5s;
}

.search span{
  font-size: 16px;
  margin-left: 2px;
  top: 5px;
}

.search span:hover{
  cursor: pointer;
}

.menu{
  display: none;
}

.drop-nav-box{
  position: fixed;
  z-index: 9;
  top: 60px;
  width: 100%;
  height: 50px;
  background: #5db2b7;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.drop-nav{
  min-width: 350px;
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: space-between;
}

.drop-nav a{
  color: white;
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

.copyright, .icp {
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
}
/*------媒体查询-----*/
@media screen and (max-width: 920px){
  .list{
    display: none;
  }
  .content{
    width: 100%;
  }
}

@media screen and (max-width: 480px){
  .main{
    padding-top: 0px;
  }

  .footer{
    top: 0px;
  }

  .nav-link,.search{
    display: none;
  }

  .menu{
    width: 30px;
    text-align: center;
    display: block;
    font-size: 22px;
    border: 1px solid #95a5a6;
    border-radius: 3px;
    position: absolute;
    right: 20px;
  }

  .menu:hover{
    cursor: pointer;
    box-shadow: 0px 0px 5px #95a5a6;
  }

  .menu span{
    margin-top: 4px;
  }
}
</style>