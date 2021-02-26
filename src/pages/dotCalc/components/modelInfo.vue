<template>
  <v-card outlined>
    <v-card-title class="subtitle-1">产品信息</v-card-title>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="3" >
            <v-text-field  :counter="10" label='产品编码'></v-text-field>
          </v-col>
          <v-col cols="12" md="9" >
            <v-text-field  label='描述'></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
export default {
  name:'modelInfo',
  
}
</script>