<template>
  <section class="homepage">
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId"/>
    <!-- Menu Links -->
    <header-prismic :menuLinks="menuLinks"/>
     <!-- Banner including image and text -->
    <home-banner :bnrImg="document.banner_image" :bnrTag="document.tagline" :bnrTxt="document.text" />
    <!-- Template for page title. -->
    <examples-grid :examples="examples"/>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import HomeBanner from '~/components/HomeBanner.vue'
import ExamplesGrid from '~/components/ExamplesGrid.vue'

export default {
  name: 'homepage',
  components: {
    HeaderPrismic,
    HomeBanner,
    ExamplesGrid
  },
  head () {
    return {
      title: 'Prismic and Nuxt.js components Website',
      meta: [{ 
        hid: 'description', 
        name: 'description', 
        content: 'Advanced Nuxt components built using dynamic data from Prismic Slices'
      }]
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
