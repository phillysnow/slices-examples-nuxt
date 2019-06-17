<template>
  <section class="homepage">
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId"/>
    <!-- Template for page title. -->
    <div class="container">
      <header-prismic :menuLinks="menuLinks"/>
      <section class="home-content">
        <p class="text">
          {{ $prismic.richTextAsPlain(document.text) }}
        </p>
        <!-- Vue tag to add examples component -->
        <examples-grid :examples="examples"/>
      </section>
    </div>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import ExamplesGrid from '~/components/ExamplesGrid.vue'

export default {
  name: 'homepage',
  components: {
    HeaderPrismic,
    ExamplesGrid
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  async asyncData({context, error, req}) {
    try{
      // Fetching the API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Query to get the home page content
      let document = {}
      const result = await api.getSingle("homepage")
      document = result.data

      // Query to get the menu content
      let menuContent = {}
      const menu = await api.getSingle('menu')
      menuContent = menu.data

      // Query to get examples content
      let examples = {}
      const response = await api.query(
        Prismic.Predicates.at("document.type", "documentation"),
        { orderings : '[my.example.date desc]' }
      )
      examples = response.results

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        // Page content
        document,
        documentId: result.id,
        // Menu
        menuContent,
        menuLinks: menuContent.menu_links,
        // examples content
        examples
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>
.home-content{
  margin-top: 150px;
}
</style>
