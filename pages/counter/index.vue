<template>
  <div>
    <p>{{ $store.state.counter.counter }}</p>
    <button @click="$store.commit('counter/increment')">
      +1
    </button>

    <hr>

    <p>{{ $store.state.subCount.scount }}</p>
    <button @click="$store.commit('subCount/addScount')">
      +2
    </button>
  </div>
</template>

<script>
export default {}
</script>
