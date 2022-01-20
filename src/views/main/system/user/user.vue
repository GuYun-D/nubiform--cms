<template>
  <div class="user">
    <div class="search">
      <gy-form :="searchFornCinfig"></gy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GyForm from '../.././../../base-ui/form'
import { searchFornCinfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    GyForm,
  },
  setup() {
    return { searchFornCinfig }
  },
})
</script>

<style scoped></style>
