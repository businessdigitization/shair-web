<template>
  <v-app>
    <v-navigation-drawer app floating clipped>
      <v-list shaped>
        <v-list-item v-for="item in items" :key="item.title" link>
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

      <v-toolbar-title class="purple--text text--darken-3 font-weight-bold">
        <v-icon>mdi-airplane-takeoff</v-icon>

        SHAIR</v-toolbar-title
      >
      <v-icon>mdi-airplane-landing</v-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      jhjhjh <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        { title: 'Trips', icon: 'mdi-airplane' },
        { title: 'Packages', icon: 'mdi-bag-checked' },
        { title: 'Bookings', icon: 'mdi-calendar-check' },
        { title: 'Settings', icon: 'mdi-cog-outline' },
        { title: 'Feedback', icon: 'mdi-comment-alert' },
        { title: 'FAQ', icon: 'mdi-head-question' }
      ]
    }
  }
}
</script>

<style lang="scss">
i.v-icon.v-icon {
  color: #6a1b9a !important;
}
</style>
