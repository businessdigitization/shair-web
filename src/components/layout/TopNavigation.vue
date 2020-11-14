<template>
  <div>
    <v-app-bar color="white" app clipped-left>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <router-link class="toolbar-title" :to="{ name: 'Trips' }">
        <v-img src="../../assets/logo.png" :aspect-ratio="7 / 3" :width="130">
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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
