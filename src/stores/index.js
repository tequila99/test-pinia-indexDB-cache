import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import localForage from 'localforage'

localForage.config({
  driver: localForage.INDEXEDDB
})
async function indexDbPlugin ({ store, options }) {
  if (!options.persist) return

  const key = options.persist?.key || store.$id + '-state'
  const data = await localForage.getItem(key)

  if (data) {
    store.$patch(JSON.parse(data))
  }

  store.$subscribe(() => {
    localForage.setItem(key, JSON.stringify(store.$state))
  })
}
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  pinia.use(indexDbPlugin)
  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
