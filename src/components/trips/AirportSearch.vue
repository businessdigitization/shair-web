<template>
  <v-card-text>
    <v-autocomplete
      v-model="model"
      no-filter
      clearable
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      color="primary"
      hide-no-data
      item-text="name"
      item-value="code"
      :label="label"
      :prepend-icon="icon"
      @input="$emit('airport-select', model)"
    ></v-autocomplete>
  </v-card-text>
</template>

<script>
import AirportService from '@/services/AirportService.js'
// import { mapState } from 'vuex'

export default {
  props: ['label', 'icon', 'searchFor'],
  data() {
    return {
      entries: [],
      isLoading: false,
      search: null,
      model: null
    }
  },
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
      if (this.model || value == null) return
      if (value.length < 3) return

      this.isLoading = true

      AirportService.airportSearch(value)
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
