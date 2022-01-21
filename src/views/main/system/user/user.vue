<template>
  <div class="user">
    <div class="search">
      <gy-form :="searchFornCinfig" v-model="formData"></gy-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GyForm from '../.././../../base-ui/form'
import { searchFornCinfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    GyForm,
  },
  setup() {
    //  必须使用ref，reactive做vmodel存在一定问题
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createAt: '',
    })
    return { searchFornCinfig, formData }
  },
})
</script>

<style scoped></style>
