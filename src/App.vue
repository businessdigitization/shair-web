<template>
  <v-app>
    <v-navigation-drawer app floating clipped>
      <v-list shaped>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          :to="item.link"
          color="primary"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="white" app clipped-left>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link class="toolbar-title" :to="{ name: 'Trips' }">
        <v-img src="./assets/logo.png" :aspect-ratio="7 / 3" :width="130">
        </v-img>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer absolute app class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>SHAIR</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      navItems: [
        { title: 'Trips', icon: 'mdi-airplane', link: 'www.espncricinfo.com' },
        { title: 'Packages', icon: 'mdi-bag-checked', link: 'About' },
        { title: 'Bookings', icon: 'mdi-calendar-check', link: '#' },
        { title: 'Settings', icon: 'mdi-cog-outline', link: '#' },
        { title: 'Feedback', icon: 'mdi-comment-alert', link: '#' },
        { title: 'FAQ', icon: 'mdi-head-question', link: '#' }
      ]
    }
  }
}
</script>

<style lang="scss">
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
