import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
import '../assets/iconfont/iconfont.css';
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
      primary: colors.blue.darken2, // #E53935
      secondary: colors.red.lighten4, // #FFCDD2
      accent: colors.indigo.base, // #3F51B5
      },
    },
    icons:{
      iconfont:'icon',
    }
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },
});
