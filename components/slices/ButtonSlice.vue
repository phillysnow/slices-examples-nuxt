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
  background-color: green;
  box-shadow: 0 5px 0 grey;
  color: white;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
}

.button:hover {
  background-color: greenyellow;
  cursor: pointer;
}

.button:active {
  box-shadow: none;
  top: 5px;
}
</style>
