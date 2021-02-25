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
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>icon-charge-calc</v-icon>
            </v-list-item-icon>
            <v-list-item-title>加工费计算</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      
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
    mail:'wangmeng@tp-link.com.cn'
  }),
};
</script>
