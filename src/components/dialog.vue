<template>
  <div class="dialog-wrap">
    <div class="dialog-cover"></div>
    <div class="dialog-content">
      <p class="dialog-close">X</p>
      <slot>empty</slot>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
  .dialog-wrap{
    position:fixed;
    width:100%;
    height:100%;
  }
</style>
