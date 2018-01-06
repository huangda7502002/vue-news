<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group class="slide-img" tag="ul" name="image">
      <li v-for="(img, index) in slides" v-show="index===nowIndex" :key="index">
        <a href="#">
          <img :src='img.src'>
        </a>
      </li>
    </transition-group>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)">
        <a :class="nowIndex==index?'on':''">{{index+1}}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              nowIndex:0,
              isShow:true
            }
        },
        props:{
          slides:{
            type:Array,
            default:[]
          }
        },
        computed: {
          prevIndex() {
            if(this.nowIndex === 0){
              return this.slides.length - 1;
            }else{
              return this.nowIndex - 1;
            }
          },
          nextIndex(){
            if(this.nowIndex === this.slides.length-1){
              return 0;
            }else{
              return this.nowIndex + 1;
            }
          }
        },
        methods:{
          goto(index){
            this.nowIndex = index;
            this.$emit('onchange',index);
          },
          runInv(){
            this.invId = setInterval(()=>{
              this.goto(this.nextIndex);
            },2000)
          },
          clearInv(){
            clearInterval(this.invId);
          }
        },
        mounted(){
          this.runInv();
        }
    }
</script>

<style>

  .slide-show{
    position:relative;
    margin:15px 15px 15px 0px;
    width:900px;
    height:350px;
    overflow:hidden;
  }
  .slide-show h2{
    position:absolute;
    width:100%;
    color:#fff;
    background:#000;
    opacity:.5;
    bottom:0;
    height:30px;
    text-align:left;
    padding-left:15px;
  }
  .slide-img{
    width:900px;
    height:100%;
  }
  .slide-img li{
    position:absolute;
  }
  .slide-img a{
    display:block;
    float:left;
    width:900px;
  }
  .slide-img img{
    display:block;
    width:900px;
    height:100%;
    float:left;
  }
  .slide-pages {
    position:absolute;
    bottom:10px;
    right:15px;
  }
  .slide-pages li {
    display:inline-block;
    padding:0 10px;
    cursor:pointer;
    color:#fff;
  }
  .slide-pages li .on {
    text-decoration:underline;
  }

  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>
