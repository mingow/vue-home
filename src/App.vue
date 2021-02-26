<template>
  <v-app>
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
    <v-navigation-drawer permanent expand-on-hover clipped app>
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
        <v-list-item-group v-model="model">
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
import logo from './assets/logo.svg'
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
    logo:logo,
    username:'王萌',
    mail:'wangmeng@tp-link.com.cn',
    model:-1,
    navi:[
      {title:'加工费计算',icon:'icon-charge-calc',path:'/chargesCalc'}
    ]
  }),
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
