<template>
  <section class="container">
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId"/>
    <!-- Slice section template -->
    <slices-block :slices="slices"/>
  </section>
</template>


<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// Imports for all components
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'example',
  components: {
    SlicesBlock
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Component Slices',
    }
  },
  async asyncData({params, error, req}) {
    try{
      // Fetching the API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get post content
      let document = {}
      const result = await api.getByUID("example", params.uid)
      document = result.data

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        documentId: result.id,
        // Set slices as variable
        slices: document.body,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>
</style>