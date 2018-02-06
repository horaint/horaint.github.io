<template>
    <div class="myMove">
        <div class="moveItem" v-for="item in moveList">
            <div class="moveItem-L"><img v-bind:src="item.images.large" alt=""></div>
            <div class="moveItem-R">
                <span>{{item.title}}</span>
                <span>评分:{{item.rating.average}}</span>
                <span>年代:{{item.year}}</span>
                <span>主演:{{item.casts[0].name}}、{{item.casts[1].name}}...</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'myMove',
    data() {
        return {
            moveList: [],
        }
    },
    created() {
        this.getMove();
    },
    methods: {
        //获取电影数据
        getMove() {
            this.$http.jsonp("https://api.douban.com/v2/movie/top250", { credentials: true }).then((res) => {
                this.moveList = res.body.subjects;
            }, (err) => {
                console.log(err);
            });
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="scoped" type="text/css" >
.myHome {
    //电影区域
    .moveItem {
        width: 100%;
        height: 200px;
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
    }
}
</style>
