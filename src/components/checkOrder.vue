<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="buyFailed">
      请检查你的支付状态！
      <div class="button" @click="buySuccess">
        确认支付
      </div>
      <div class="button" @click="buyFailed">
        取消支付
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="checkStatus">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="checkStatus">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
  import Dialog from './dialog.vue';
    export default {
      components:{
        thisDialog:Dialog
      },
      props:{
        isShowCheckDialog:{
          type:Boolean,
          default:false
        }
      },
      data() {
        return {
          isShowSuccessDialog:false,
          isShowFailDialog:false
        }
      },
      methods:{
        buyFailed(){
          this.isShowFailDialog = true;
          this.$emit('on-close-check-dialog');
        },
        buySuccess(){
          this.isShowSuccessDialog = true;
          this.$emit('on-close-check-dialog');
        },
        checkStatus(){
          this.isShowFailDialog = false;
          this.isShowSuccessDialog = false;
          this.$router.push({path:'/orderList'});
        }
      }
    }
</script>

<style>

</style>
