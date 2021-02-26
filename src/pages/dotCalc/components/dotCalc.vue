<template>
  <v-card outlined>
    <v-card-title class="subtitle-1">点数计算</v-card-title>
    <v-card-text>
      <v-btn :loading="loading" color="primary" @click="getBom">获取BOM</v-btn>
      <v-btn color="primary" class="ml-2" outlined >点数计算规则</v-btn>
      <div class="subtitle-2 ma-2">无点数物料</div>
      <v-data-table dense 
        :headers="headers"
        :items="desserts"
        class="mt-2"
        :loading="loading"
      >
        <template v-slot:[`item.file`]="{item}">
          <v-btn x-small outlined @click="getFile(item.file)">获取文件地址</v-btn>
        </template>
        <template v-slot:[`item.num`]="props">

          <v-edit-dialog large persistent
            :return-value.sync="props.item.num"
            save-text='更新'
            cancel-text='取消'
            @save="getBom"
          >          
            {{ props.item.num }}
            <template v-slot:input>
              <v-text-field v-model="props.item.num" label="点数" counter ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
      </v-data-table>
      <v-btn color="primary">提交点数</v-btn>
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
        value: 'id',
      },
      {
        text: '描述', 
        value: 'model',
        align: 'start',
        },
      { text: '评估资料', value: 'file' },
      {
        text: '点数',
        value: 'num',
        width:100,
      }
    ],
    desserts: [
      {id:'2030500945',model:'PCB|MCS1508MREV1.0.0|1.1|118.60*52.50*1.0|FR-4|两层|148398|绿油|OSP|5|QFP|无|中性|新做|无|十拼板/262.50*237.20*1.0|[ZW]',file:'...',num:0}
    ],
  }),
  watch:{
    loading:function(){
      // if(val){
      //   this.$emit('loading',true)
      // }else{
      //   this.$emit('loading',false)
      // }
    }
  },
  methods:{
    getBom:function(){
      this.loading = true;
      const self = this;
      setTimeout(() => {
        self.loading = false
      }, 2000);
    }
  }
}
</script>