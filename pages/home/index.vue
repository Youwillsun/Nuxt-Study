<template>
  <div>
    <h2>Home Page</h2>
    <button @click="sayHello()">
      Say Hello
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    sayHello () {
      this.$debug('say hello !!!')
    }
  }
}
</script>

<style lang="sass">
</style>
