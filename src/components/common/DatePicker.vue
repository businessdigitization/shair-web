<template>
  <v-card-text>
    <v-menu
      v-model="dateMenu"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="model"
          label="Date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          clearable
        ></v-text-field>
      </template>
      <v-date-picker v-model="model" @input="hideAndEmitDate"></v-date-picker>
    </v-menu>
  </v-card-text>
</template>

<script>
export default {
  data: () => ({
    model: '',
    dateMenu: false
  }),
  methods: {
    hideAndEmitDate() {
      this.dateMenu = false
      this.$emit('date-select', this.model)
    }
  }
}
</script>
