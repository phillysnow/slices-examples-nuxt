<template>
  <section>
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId"/>
    <header-prismic :menuLinks="menuLinks"/>
    <page-banner :bgImg="bgImg" :bgClr="bgClr"/>
    <section class="container">
      <h1>
          {{ $prismic.richTextAsPlain(document.title) }}
      </h1>
      <prismic-rich-text :field="document.intro"/>
      <div class="intro-buttons">
        <prismic-link class="button" id="demo-button" :field="document.demo_link">
          {{ document.demo_text }}
        </prismic-link>
        <prismic-link class="button" id="dl-button" :field="document.download_link">
          {{ document.dl_text }}
        </prismic-link>
      </div>
      <toc-slice :title="document.title" :slices="slices"/>
      <section class="page">
        <div class="content">
          <!-- Slice section template -->
          <slices-block :slices="slices"/>
        </div>
      </section>
    </section>
  </section>
</template>


<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// Imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import PageBanner from '~/components/PageBanner.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'
import TocSlice from '~/components/TocSlice.vue'

export default {
  name: 'example',
  components: {
    HeaderPrismic,
    PageBanner,
    SlicesBlock,
    TocSlice
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
      const result = await api.getByUID("documentation", params.uid)
      document = result.data

      // Query to get the menu content
      let menuContent = {}
      const menu = await api.getSingle('menu')
      menuContent = menu.data

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        // Post content
        document,
        documentId: result.id,
        bgImg: document.bgimg,
        bgClr: document.bgclr,
        // Set slices as variable
        slices: document.body,
        // Menu
        menuContent,
        menuLinks: menuContent.menu_links,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style scoped>
h2.content {
  padding-top: 50px !important;
}

.intro-buttons {
  display: flex;
  justify-content: space-between;
}

.button {
  color: white;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 350px;
  height: 30px;
  border-radius: 3px;
  text-align: center;
  line-height: 30px;
}

.button:hover {
  background-color: #757575;
  cursor: pointer;
}

.button:active {
  box-shadow: none;
  top: 5px;
}

#demo-button{
  background-color: #5163BA;
  margin-right: 10px;
}

#demo-button:hover{
  background-color: #6f7cbb;
}

#dl-button {
  background-color: #000;
}

#dl-button:hover {
  background-color: #757575;
}
/* Media Queries */
@media (max-width: 1060px) {
  .banner {
    height: 60vh;
  }
}
@media (max-width: 757px) {
  #dl-button {
    line-height: 15px;
  }
  .banner {
    height: 50vh;
  }
}
</style>
