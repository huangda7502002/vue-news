<template>
  <div class="dialog-wrap">
    <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="isShow">
        <p class="dialog-close" @click="closeMyself">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props:{
          isShow:{
            type:Boolean,
            default:false
          }
        },
        methods:{
          closeMyself(){
            this.$emit('on-close');
          }
        }
    }
</script>

<style>
  .dialog-wrap{
    position:fixed;
    width:100%;
    height:100%;
  }
  .dialog-cover{
    background:#000;
    opacity:.3;
    position:fixed;
    z-index:5;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
  .dialog-content{
    width:50%;
    position:fixed;
    max-height:50%;
    overflow:hidden;
    background:#fff;
    top:20%;
    left:50%;
    margin-left:-25%;
    z-index:10;
    border:2px solid #464068;
    padding:2%;
    line-height:1.6;
  }
  .dialog-close{
    position:absolute;
    right:10px;
    top:7px;
  }
  .drop-enter-active,.drop-leave-active{
    transition:all .5s;
  }
  .drop-enter{
    transform:translateY(-500px);
  }
  .drop-leave-active{
    transform:translateY(-500px);
  }
</style>
