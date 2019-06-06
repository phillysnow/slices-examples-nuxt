<template>
  <section class="container">
    <header-prismic :menuLinks="menuLinks"/>
    <h2>
        {{ $prismic.richTextAsPlain(document.title) }}
    </h2>
    <slices-block :slices="linkedDoc.body"/>
    <section class="page">
      <div class="content">
        <!-- Slice section template -->
        <slices-block :slices="slices"/>
      </div>
      <toc-slice :title="document.title" :slices="slices"/>
    </section>
  </section>
</template>


<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// Imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'
import TocSlice from '~/components/TocSlice.vue'

export default {
  name: 'example',
  components: {
    HeaderPrismic,
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

      const demo = `{
                    documentation {
                      title
                      example_link {
                        body {
                          ...on image_carousel {
                            repeat {
                              ...repeatFields
                            }
                          }
                          ...on image_gallery {
                            repeat {
                              ...repeatFields
                            }
                          }
                        }
                      }
                      body {
                        ...on content_relation {
                          non-repeat {
                            demo_link {
                              ...on example{
                                body {
                                  ...on image_carousel {
                                    repeat {
                                      ...repeatFields
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        ...on text_section {
                          non-repeat {
                            ...non-repeatFields
                          }
                        }
                        ...on embed {
                          non-repeat {
                            ...non-repeatFields
                          }
                        }
                        ...on more_info {
                          non-repeat {
                            ...non-repeatFields
                          }
                        }
                        ...on download_button {
                          non-repeat {
                            ...non-repeatFields
                          }
                        }
                        ...on code_snippet {
                          non-repeat {
                            ...non-repeatFields
                          }
                        }
                        ...on button {
                          non-repeat {
                            ...non-repeatFields
                          }
                        }
                      }
                    }
                  }`

      // Query to get post content
      let document = {}
      const result = await api.getByUID("documentation", params.uid,
        { 'graphQuery': demo }
      )
      document = result.data

      // Query to get the menu content
      let menuContent = {}
      const menu = await api.getSingle('menu')
      menuContent = menu.data

      return {
        // Post content
        document,
        //content from link field
        linkedDoc: document.example_link.data,
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
</style>