<template>
  <section class="homepage">
    <!-- Template for page title. -->
    <div class="container">
    <header-prismic :menuLinks="menuLinks"/>
      <p class="text">
        {{ $prismic.richTextAsPlain(document.text) }}
      </p>
    </div>
    <!-- Vue tag to add examples component -->
    <examples-grid :examples="examples"/>
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

      return {
        // Page content
        document,
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
