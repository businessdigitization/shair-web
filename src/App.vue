<template>
  <v-app>
    <LeftNavigation />
    <TopNavigation />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/layout/Footer'
import LeftNavigation from '@/components/layout/LeftNavigation'
import TopNavigation from '@/components/layout/TopNavigation'

export default {
  name: 'App',
  components: {
    Footer,
    LeftNavigation,
    TopNavigation
  }
}
</script>

<style lang="scss">
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
