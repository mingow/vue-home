<template>
  <v-container>
    <ModelInfo class="ma-2"/>
    <DotCalc class="ma-2" @loading="(val)=>{this.overlay = val}"/>
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
export default {
  name:'chargeCalc',
  components:{DotCalc,ModelInfo},
  data:()=>({
    elevation:2,
    overlay:false,
  })
}
</script>