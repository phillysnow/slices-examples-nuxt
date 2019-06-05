<template>
  <div class="content-section">
    <a :href="link.url" class="button" :download="slice.primary.file_name">
      {{ slice.primary.button_text }}
    </a>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'download-button',
  data: function() {
    return {
      link: ''
    }
  },
  created () {
    this.link = this.slice.primary.button_link
  }
}
</script>


<style scoped>
.button {
  background-color: red;
  box-shadow: 0 5px 0 darkred;
  color: white;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
}

.button:hover {
  background-color: #ce0606;
  cursor: pointer;
}

.button:active {
  box-shadow: none;
  top: 5px;
}
</style>
