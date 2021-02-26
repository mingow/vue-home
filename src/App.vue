<template>
  <v-app v-resize="onResize">
    <v-app-bar
      app
      color="primary"
      dark
      dense
      elevation="0"
      clipped-left
    >
      <div class="d-flex align-center">
        <v-icon class="mr-2">icon-MES</v-icon>
        <span>制造执行系统</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">离开</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer :mini-variant="!expand" :expand-on-hover="!expand" permanent clipped app>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{username}}
            </v-list-item-title>
            <v-list-item-subtitle>{{mail}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="naviIndex" mandatory>
          <router-link v-for="(item,index) in navi" :key="index" :to="item.path">
            <v-list-item link>
              <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    
  },
  metaInfo:{
    title:'制造执行系统',
    htmlAttrs:{
      lang:'cn'
    }
  },
  data: () => ({
    username:'王萌',
    mail:'wangmeng@tp-link.com.cn',
    naviIndex:-1,
    navi:[
      {title:'通用',icon:'icon-all',path:'/'},
      {title:'SMT点数计算',icon:'icon-electronics',path:'/dotCalc'},
    ],
    expand:true,
  }),
  watch:{
    naviIndex:function(val){
      if(val==-1){
        this.$router.push('/')
      }
    },
    
  },
  methods:{
    handleRoute:function(){
      const route = this.$route;
      let res = this.navi.findIndex((i)=>{
        return i.path===route.path?true:false
      })
      this.naviIndex = res
    },
    onResize () {
      const width = window.innerWidth
      if(width<1200){
        this.expand = false
      }else{
        this.expand = true
      }
    },
  },
  mounted:function(){
    this.handleRoute()
    this.onResize()
  }
};
</script>
<style>
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}

</style>
