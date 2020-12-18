<template>
  <div>
    <h2>详情页面</h2>
    <p>{{ $route.params.id }}</p>
    <p>{{ detail.price }}</p>
    <p>{{ detail.description }}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    const res = await axios.get('./data/test.json')
    console.log('res: ', res)
    return {
      detail: res.data
    }
    // return axios.get('./data/test.json').then((res) => {
    //   console.log('res: ', res)
    //   return {
    //     detail: res.data
    //   }
    // })
  }
}
</script>

<style lang="sass">
</style>
