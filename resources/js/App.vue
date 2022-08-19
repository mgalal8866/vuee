
<template>
 <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app >
                <v-list>
                    <v-list-item v-for="(item,i ) in items" :key="i"  :to="item.link" >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Application</v-toolbar-title>
            </v-app-bar>

            <v-main>
                <router-view></router-view>
            </v-main>
  </v-app>
</template>

<script>
     export default {
     name: 'app',
    data: () =>  {
      return {
         drawer: null ,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/' },
        //   { title: 'Photos', icon: 'mdi-image',link: 'KHD'  },
          { title: 'About', icon: 'mdi-help-box',link: 'About' },
        ],

      }
    },
  }
</script>
