<template>
  <div>
    <h2>Goods List</h2>
    <ul>
      <li v-for="item of list" :key="item.name">
        <nuxt-link :to="'/detail/' + item.id">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    const arr = context.app.sort([1, 7, 6, 5, 10])
    console.log('arr: ', arr)

    const arr2 = context.app.$integerSort([1, 7, 6, 5, 10])
    console.log('arr2: ', arr2)
  },
  data: () => {
    return {
      list: [
        { id: '009', name: 'iphone100', price: 20000 },
        { id: '007', name: 'huawei10000', price: 8888 },
        { id: '008', name: 'chuizi1001', price: 9999 }
      ]
    }
  },
  mounted () {
    const arr3 = this.$integerSort([1, 7, 6, 5, 10])
    console.log('arr3: ', arr3)
  }
}
</script>

<style lang="sass">
</style>
