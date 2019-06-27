<template>
  <div class="bnrbg">
    <section class="banner container">
      <div class="text-block">
        <h2 class="tagline">
          {{ $prismic.richTextAsPlain(bnrTag) }}
        </h2>
        <p class="text">
          {{ $prismic.richTextAsPlain(bnrTxt) }}
        </p>
      </div>
      <prismic-image class="main-img" :field="bnrImg"/>
    </section>
  </div>
</template>

<script>
export default {
  props: ['bnrImg','bnrTag','bnrTxt'],
  name: 'home-banner'
}
</script>

<style scoped>
.bnrbg {
  background-color: #F3F3F3;
}
.banner {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 75px 0 50px 0;
}
.text-block {
  display: inline-block;
  width: 60%;
}
.tagline {
  color: #41B883;
}
.text{ 
  font-size: 1.25rem;
  margin: 0;
}
.main-img{
  width: 30%;
}
</style>