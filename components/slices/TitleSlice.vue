<template>
  <div class="container">
    <prismic-rich-text class="content-section title" :field="slice.primary.heading"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'title-slice'
}
</script>

<style scoped>
.title {
  margin-top: 50px;
  border-bottom: 2px solid #DADADA;
  margin-bottom: 25px;
}
</style>
