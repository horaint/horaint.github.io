<template>
  <div class="myHome">
    <!--导航栏  -->
    <div class="myNav">
      <router-link to="/myMove">新闻</router-link>
      <router-link to="/myMove">星座</router-link>
      <router-link to="/myMove">美食</router-link>
      <router-link to="/myMove">音乐</router-link>
      <router-link to="/myMove">电影</router-link>
      <router-link to="/myMove">摄影</router-link>
      <router-link to="/myMove">图书</router-link>
      <router-link to="/myMove">旅行</router-link>
    </div>
    <!--轮播图  -->
    <div class="myBanner">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/shuijiao.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/yuantiao.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/muwu.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <!--今日头条  -->
    <mt-cell title="今日头条" value="更多"></mt-cell>
    <!--今日头条  -->
    <div class="newsItem" v-for="(item, index) in newsList">
      <span>{{index+1}}</span>
      <span>{{item.title}}</span>
      <span>详情</span>
    </div>
    <!--标题栏  -->
    <mt-cell title="星座分析" value="更多"></mt-cell>
    <!--星座分析  -->
    <div class="xingzItem">
      <div class="xingz-con" v-for="(item, index) in xingzList">
        <img v-bind:src="item.pic" alt="">
        <p>{{item.astroname}}</p>
        <p>{{item.date}}</p>
      </div>
    </div>
    <!--音乐推荐  -->
    <mt-cell title="音乐推荐" value="更多"></mt-cell>
    <!--热门音乐  -->
    <div class="musicItem" v-for="(item, index) in musicList">
      <span>{{index+1}}</span>
      <span><img v-bind:src="item.image" alt=""></span>
      <span>《{{item.title}}》</span>
      <span>{{item.rating.average}}</span>
      <span>{{item.attrs.singer[0]}}</span>
      <span>{{item.tags[6].name}}</span>
    </div>
    <!--标题栏  -->
    <mt-cell title="电影推荐" value="更多"></mt-cell>
    <!--热门电影  -->
    <div class="moveItem" v-for="item in moveList">
      <div class="moveItem-L"><img v-bind:src="item.images.large" alt=""></div>
      <div class="moveItem-R">
        <span>{{item.title}}</span>
        <span>
          <strong>评分</strong>:{{item.rating.average}}</span>
        <span>
          <strong>年代</strong>:{{item.year}}</span>
        <span>
          <strong>主演</strong>:{{item.casts[0].name}}、{{item.casts[1].name}}...</span>
      </div>
    </div>
    <!--标题栏  -->
    <!--图书推荐  -->
    <mt-cell title="图书推荐" value="更多"></mt-cell>
    <div class="bookItem" v-for="item in bookList">
      <div class="bookItem-L"><img v-bind:src="item.image" alt=""></div>
      <div class="bookItem-R">
        <span>{{item.title}}{{item.alt_title}}</span>
        <span>
          <strong>评分</strong>:{{item.rating.average}}</span>
        <span>
          <strong>作者</strong>:{{item.author[0]}}</span>
        <span>
          <strong>翻译</strong>:{{item.translator[0]}} {{item.translator[1]}}</span>
        <span>
          <strong>简介</strong>:{{item.summary}}</span>
      </div>
    </div>
    <!--标题栏  -->

  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped" type="text/css" >
.myHome {
  .myNav {
    //导航栏
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 9999;
    a {
      font-size: 12px;
      padding: 3px 8px;
      border-radius: 3px;
      cursor: pointer;
      text-decoration: none;
    }
    a:nth-child(2n) {
      color: #4cd964;
      border: 1px solid #4cd964;
    }
    a:nth-child(2n+1) {
      color: #dd524d;
      border: 1px solid #dd524d;
    }
  } //轮播图
  .myBanner {
    width: 100%;
    height: 240px;
    background: #f2f2f2;
    img {
      width: 100%;
    }
  } //电影区域
  .moveItem {
    width: 50%;
    height: 130px;
    float: left;
    padding: 5px;
    box-sizing: border-box;
    .moveItem-L {
      width: 50%;
      height: 120px;
      float: left;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .moveItem-R {
      width: 50%;
      height: 120px;
      float: right;
      span {
        text-align: left;
        font-size: 10px;
        display: block;
        padding-left: 5px;
      }
      span:nth-child(1) {
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  } //标题区域
  .bookItem {
    width: 100%;
    height: 150px;
    float: left;
    box-sizing: border-box;
    padding: 0px 10px 0px 10px;
    margin: 5px 0px 15px 0px;
    box-sizing: border-box;
    .bookItem-L {
      width: 30%;
      height: 150px;
      float: left;
      img {
        display: block;
        height: 100%;
      }
    }
    .bookItem-R {
      width: 70%;
      height: 150px;
      float: left;
      span {
        text-align: left;
        font-size: 10px;
        display: block;
        padding-left: 5px;
        padding-right: 5px;
      }
      span:nth-child(1) {
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span:nth-child(5) {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
  .musicItem {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e2e2e2;
    float: left;
    box-sizing: border-box;

    span:nth-child(1) {
      float: left;
      width: 20px;
      height: 20px;
      line-height: 20px;
      background: #e2e2e2;
      border-radius: 50%;
      margin-top: 15px;
      margin-left: 10px;
    }
    span:nth-child(2) {
      float: left;
      display: inline-block;
      width: 30px;
      height: 30px;
      margin: 10px 10px;
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }

    span:nth-child(3) {
      float: left;
      margin-right: 10px;
    }
    span:nth-child(4) {
      float: right;
      margin-right: 10px;
    }
    span:nth-child(5) {
      float: right;
      margin-right: 10px;
    }
    span:nth-child(6) {
      float: right;
      margin-right: 10px;
    }
  }
  .newsItem {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e2e2e2;
    float: left;
    box-sizing: border-box;
    padding: 0 10px;
    font-size: 12px;
    span:nth-child(1) {
      float: left;
      width: 20px;
      height: 20px;
      line-height: 20px;
      background: #e2e2e2;
      border-radius: 50%;
      margin-top: 15px;
      margin-right: 10px;
    }
    span:nth-child(2) {
      float: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span:nth-child(3) {
      float: right;
    }
  }
  .xingzItem {
    width: 100%;
    float: left;
    padding: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #e2e2e2;
    .xingz-con {
      width: 25%;
      float: left;
      img {
        border-radius: 50%;
      }
      p {
        font-size: 12px;
        text-align: center;
        padding: 0;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'myHome',
  data() {
    return {
      active: "tab-container1",
      moveList: [],
      bookList: [],
      musicList: [],
      newsList: [],
      xingzList: []
    }
  },
  created() {
    this.getNews();
    this.getMove();
    this.getMusic();
    this.getBook();
    this.getConstellation();
  },
  methods: {
    //获取新闻数据
    getNews() {
      this.$http.jsonp("http://api.jisuapi.com/news/get?channel=%E5%A4%B4%E6%9D%A1&appkey=8b19bbe82471d183", { credentials: true }).then((res) => {
        this.newsList = res.body.result.list.slice(0, 5);
      }, (err) => {
        console.log(err);
      });
    },
    //获取电影数据
    getMove() {
      this.$http.jsonp("https://api.douban.com/v2/movie/top250", { credentials: true }).then((res) => {
        this.moveList = res.body.subjects.slice(0, 6);
      }, (err) => {
        console.log(err);
      });
    },
    //获取音乐数据
    getMusic() {
      this.$http.jsonp("https://api.douban.com/v2/music/search?tag=%E5%8D%8E%E8%AF%AD&count=8", { credentials: true }).then((res) => {
        this.musicList = res.body.musics;
      }, (err) => {
        console.log(err);
      });
    },
    //获取星座数据
    getConstellation() {
      this.$http.jsonp("http://api.jisuapi.com/astro/all?appkey=8b19bbe82471d183", { credentials: true }).then((res) => {
        console.log(res.body.result);
        this.xingzList = res.body.result;
      }, (err) => {
        console.log(err);
      });
    },
    //获取图书数据
    getBook() {
      this.$http.jsonp("https://api.douban.com/v2/book/10519369", { credentials: true }).then((res) => {
        this.bookList.push(res.body);
        this.$http.jsonp("https://api.douban.com/v2/book/4826530", { credentials: true }).then((res) => {
          this.bookList.push(res.body);
          this.$http.jsonp("https://api.douban.com/v2/book/25762009", { credentials: true }).then((res) => {
            this.bookList.push(res.body);
            this.$http.jsonp("https://api.douban.com/v2/book/25976544", { credentials: true }).then((res) => {
              this.bookList.push(res.body);
              this.$http.jsonp("https://api.douban.com/v2/book/6789605", { credentials: true }).then((res) => {
                this.bookList.push(res.body);
              }, (err) => {
                console.log(err);
              });
            }, (err) => {
              console.log(err);
            });
          }, (err) => {
            console.log(err);
          });
        }, (err) => {
          console.log(err);
        });
      }, (err) => {
        console.log(err);
      });

    }

  }
}
</script>
