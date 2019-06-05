<template>
  <section class="container">
    <div class="auto-grid">
      <div v-for="example in examples" :key="example.id" v-bind:example="example">
        <router-link :to="linkResolver(example)">
          <div class="box">
            <h2>{{ $prismic.richTextAsPlain(example.data.title) }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </section>
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
body {
  background: #efefef;
  padding: 1rem;
  line-height: 1.4;
  font-family: sans-serif;
}
.blog-main {
  max-width: 700px;
  margin: auto;
}
.blog-post {
  margin-bottom: 3rem;
}
.blog-post h2 {
  margin: 0;
}
.blog-post-meta {
  color: #9A9A9A;
  font-family: 'Lato', sans-serif;
  margin-bottom: 8px;
  font-size: 16px;
}
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
  color: #ffffff;
  min-height: 100px;
  max-height: 100px;
}
/* Media Queries */
@media (max-width: 767px) {
  .blog-main {
    padding: 0 20px;
    font-size: 18px;
  }
}
</style>