<template>
  <v-card outlined>
    <v-card-title class="subtitle-1">点数分解
      <v-subheader>组代物料点数默认计算在对应半成品中</v-subheader>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <v-treeview open-all selectable :items="items" ></v-treeview>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name:'dotSplit',
  data:()=>({
    items:[
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
    ]
  })
}
</script>
