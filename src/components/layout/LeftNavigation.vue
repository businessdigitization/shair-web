<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title: 'Trips', icon: 'mdi-airplane', link: '/' },
        { title: 'Parcels', icon: 'mdi-bag-checked', link: '/parcels' },
        { title: 'Bookings', icon: 'mdi-calendar-check', link: '#' },
        { title: 'Settings', icon: 'mdi-cog-outline', link: '#' },
        { title: 'Feedback', icon: 'mdi-comment-alert', link: '#' },
        { title: 'FAQ', icon: 'mdi-head-question', link: '#' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
