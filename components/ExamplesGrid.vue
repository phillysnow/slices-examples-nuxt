<template>
  <div class="auto-grid">
    <div v-for="example in examples" :key="example.id" v-bind:example="example">
      <router-link :to="linkResolver(example)">
        <div class="box" :style="{ backgroundColor: example.data.bgclr}">
          <h2>{{ $prismic.richTextAsPlain(example.data.title) }}</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
import LinkResolver from "~/plugins/link-resolver.js"

export default {
  props: ['examples'],
  name: 'examples-grid',
  data: function() {
    return {
      linkResolver: this.$prismic.linkResolver
    }
  },
}
</script>

<style scoped>
.auto-grid {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 1rem;
}
.box {
  padding: 5rem 1rem;
  text-align: center;
  font-size: 1.2rem;
  background: #eb4d4b;
  background-size: 100%;
  background-repeat: no-repeat;
  color: #ffffff;
  min-height: 100px;
  max-height: 100px;
  background-position: center bottom; 
}
</style>