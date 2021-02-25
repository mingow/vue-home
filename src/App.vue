<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
      clipped-left
      elevation="0"
    >
      <div class="d-flex align-center">
        <v-icon>icon-MES</v-icon>
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
    <v-navigation-drawer permanent clipped>
      
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
    logo:logo
  }),
};
</script>
