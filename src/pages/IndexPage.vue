<template>
  <q-page class="flex column">
    <h4 class="q-ml-md text-primary">Тест кеша на основе pinia + indexDB</h4>
    <q-btn class="flex q-ma-lg" @click="store.addValue">
      Добавить значение
    </q-btn>
    <q-list bordered separator>
      <q-item v-for="value in store.list" :key="value">
        <q-item-section>{{  value  }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useMainStore } from 'stores/main.js'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const store = useMainStore()

    return {
      store
    }
  }
})
</script>
