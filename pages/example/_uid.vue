<template>
  <section class="container">
    <header-prismic :menuLinks="menuLinks"/>
    <h2>
        {{ $prismic.richTextAsPlain(document.title) }}
    </h2>
    <section class="page">
      <div class="content">
        <!-- Slice section template -->
        <slices-block :slices="slices"/>
      </div>
      <div class="table-of-contents">
        <h3>Table of Contents</h3>
        <ul>
          <il class="headingSection">
            <a href="#">
              {{ $prismic.richTextAsPlain(document.title) }}
            </a>
          </il>
          <section v-for="(slice, index) in slices" :key="'slice-' + index">
            <template v-if="slice.slice_type === 'text_section'">
              <section v-for="(element, index) in slice.primary.rich_text" :key="'element-' + index">
                <template v-if="element.type === 'heading2'">
                  <li class="headingSection">
                    <a :href="'#' + element.text.replace(/\W+/g, '-').toLowerCase()">
                      {{ element.text }}
                    </a>
                  </li>
                </template>
                <template v-if="element.type === 'heading3'">
                  <li class="headingParagraph">
                    <a :href="'#' + element.text.replace(/\W+/g, '-').toLowerCase()">
                      {{ element.text }}
                    </a>
                  </li>
                </template>
              </section>
            </template>
          </section>
        </ul>
      </div>
    </section>
  </section>
</template>


<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// Imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'example',
  components: {
    HeaderPrismic,
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

      // Query to get the menu content
      let menuContent = {}
      const menu = await api.getSingle('menu')
      menuContent = menu.data

      return {
        // Post content
        document,
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

<style>
.page {
  display: flex;  
  flex-flow: row wrap;
}
.content {
  width: 70%;
}
.table-of-contents {
  position: fixed;
  width: 25%;
  right: 5%;
}
.table-of-contents ul li.headingParagraph {
  padding-left: 15px;
}
</style>