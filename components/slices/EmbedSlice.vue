<template>
  <section class="content-section container">
    <span v-html="slice.primary.embed_field"></span>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'embed-slice'
}
</script>
