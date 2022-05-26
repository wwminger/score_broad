<template>
  <div id="app">
    <BarGraph :gfData="gfData" :recMaxH="600"/>
  </div>

</template>

<script>
import * as Vue from 'vue'
import BarGraph from './components/BarGraph.vue'
// ①②③④⑤⑥⑦⑧⑨⑩
export default {
  name: 'app',
  data() {
    return {
      gfData: [
        { id: '1', name: '①', value: '0' },
        { id: '2', name: '②', value: '0' },
        { id: '3', name: '③', value: '0' },
        { id: '4', name: '④', value: '0' },
        { id: '5', name: '⑤', value: '0' },
        { id: '6', name: '⑥', value: '0' },
        { id: '7', name: '⑦', value: '0' },
        { id: '8', name: '⑧', value: '0' },
        { id: '9', name: '⑨', value: '0' },
        { id: '10', name: '⑩', value: '0' },
      ],
    }
  },
  components: {
    BarGraph,
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
