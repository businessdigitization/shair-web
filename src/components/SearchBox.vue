<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-card>
        <v-card-text>
          <v-autocomplete
            no-filter
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="primary"
            hide-no-data
            item-text="name"
            item-value="code"
            label="From"
            placeholder="Type City or Airport Name"
            prepend-icon="mdi-airplane-takeoff"
          ></v-autocomplete>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AirportService from '@/services/AirportService.js'

export default {
  data: () => ({
    entries: [],
    isLoading: false,
    search: null,
    model: null
  }),
  computed: {
    items() {
      return this.entries.map(entry => {
        const name =
          entry.city.name + ', ' + entry.city.country.name + ', ' + entry.code

        return Object.assign({}, entry, { name })
      })
    }
  },

  watch: {
    search(value) {
      if (value.length < 3) return
      this.isLoading = true

      AirportService.search(value)
        .then(response => {
          this.entries = response.data
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>
<style lang="scss" scoped></style>
