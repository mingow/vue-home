<template>
  <v-card outlined>
    <v-card-title class="subtitle-1">点数计算</v-card-title>
    <v-card-text>
      <v-btn color="primary" @click="getBom">获取BOM</v-btn>
      <div class="subtitle-2 ma-2">无点数物料</div>
      <v-data-table dense :elevation="0"
        
        :headers="headers"
        :items="desserts"
        class="elevation-1 mt-2"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name:'DotCalc',
  data:()=>({
    loading:false,
    headers: [
      {
        text: '料号',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: '描述', value: 'calories' },
      { text: '评估资料', value: 'calories' },
    ],
    desserts: [
      
    ],
  }),
  watch:{
    loading:function(val){
      if(val){
        this.$emit('loading',true)
      }else{
        this.$emit('loading',false)
      }
    }
  },
  methods:{
    getBom:function(){
      this.loading = true;
    }
  }
}
</script>