<template>
  <section class="banner" >
    <prismic-image style="width:60%;" class="main-img" :field="bgImg"/>
  </section>
</template>

<script>
export default {
  props: ['bgImg','bgClr'],
  name: 'page-banner'
}
</script>

<style scoped>
.banner {
  height: 75vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
