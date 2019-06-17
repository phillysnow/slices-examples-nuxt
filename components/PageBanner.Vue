<template>
  <section class="banner" :style="styleObject">
    <prismic-image style="width:60%;" class="main-img" :field="bgImg"/>
  </section>
</template>

<script>
export default {
  props: ['bgImg', 'bgClr'],
  name: 'page-banner',
  data: function () {
    return {
      styleObject: {
        backgroundColor: this.bgClr
      }
    }
  }
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
