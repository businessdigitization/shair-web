<template>
  <v-container fill-height>
    <SearchBox />
  </v-container>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'Trips',
  components: {
    SearchBox
  }
}
</script>
