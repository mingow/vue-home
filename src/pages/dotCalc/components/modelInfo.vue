<template>
  <v-card outlined>
    <v-card-title class="subtitle-1">产品信息</v-card-title>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="3" >
            <v-text-field @change="getModel" :value.sync="id" :counter="10" label='产品编码'></v-text-field>
          </v-col>
          <v-col cols="12" md="9" >
            <v-text-field :value='model' :loading="loading" label='描述'></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
import axios from 'axios'
export default {
  name:'modelInfo',
  data:()=>({
    id:'',
    model:'',
    loading:false,
  }),
  methods:{
    getModel:function(target){
      const id = target;
      if(id.length!=10){return;}
      this.loading = true;
      const self = this;
      axios.post('/api/dms/eco/findItemInfo.htm',{submitData:id}).then(res=>{
        self.loading = false
        if(res.data.success&&res.data.data.totalCounts==1){
          self.model = res.data.data.results[0].ITEM_DESC
        }else{
          self.model = '';
        }
      })
    }
  }
}
</script>