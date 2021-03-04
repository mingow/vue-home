<template>
  <v-container>
    <v-snackbar top v-model="msgbox">{{ msg }}</v-snackbar>
    <v-row class="mb-0">
      <v-col  class="d-flex flex-row-reverse"><v-btn depressed color="error">重置</v-btn></v-col>
    </v-row>
    <ModelInfo class="mb-2" @msg= "(val)=>{this.msg = val}"/>
    <DotCalc class="mb-2" @loading="(val)=>{this.overlay = val}"/>
    <DotSplit />
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>
<script>
import DotCalc from './components/dotCalc'
import ModelInfo from './components/modelInfo'
import DotSplit from './components/dotSplit'
export default {
  name:'chargeCalc',
  components:{DotCalc,ModelInfo,DotSplit},
  data:()=>({
    elevation:2,
    overlay:false,
    step:1,
    msgbox:false,
    msg:'',
  }),
  watch:{
    msg:function(val){
      if(!val){return;}
      this.msgbox = true;
      setTimeout(() => {
        this.msgbox = false;
        this.msg = '';
      }, 3000);
    }
  }
}
</script>