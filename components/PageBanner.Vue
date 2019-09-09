<template>
  <section class="banner">
    <div :style="`backgroundColor:${bgClr}`">
    <prismic-image style="width:60%;" class="main-img" :field="bgImg"/>
    </div>
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
