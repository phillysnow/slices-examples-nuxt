<template>
  <div class="content-section">
    <prismic-link class="button" :field="slice.primary.button_link">
      {{ slice.primary.button_text }}
    </prismic-link>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'button-slice'
}
</script>


<style scoped>
.button {
  background-color: #5163BA;
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
  background-color: #6f7cbb;
  cursor: pointer;
}

.button:active {
  box-shadow: none;
  top: 5px;
}
</style>
